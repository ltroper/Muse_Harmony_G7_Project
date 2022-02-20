const { csrfProtection, asyncHandler } = require("./util");
const { loginUser, logoutUser, requireAuth } = require("../auth");
const { check, validationResult } = require("express-validator");
const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db/models");

const router = express.Router();

router.get(
  "/",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    //generate a list showing all libraries

    //provides all albums in a library
    const { userId } = req.session.auth;
    const user = await db.User.findOne({
      where: { id: userId },
    });

    //find all albums a user has added to a library
    const libraryList = await db.AlbumLibrary.findAll({
      where: {
        userId,
      },
    });

    // console.log(libraryList[0]);

    //provides unique library names no duplicates
    const uniqueLists = new Set();
    const uniqueNameArr = [];
    for (let i = 0; i < libraryList.length; i++) {
      let listAlbum = libraryList[i];
      if (!uniqueLists.has(listAlbum.dataValues.name)) {
        uniqueLists.add(listAlbum.dataValues.name);
        uniqueNameArr.push(listAlbum.dataValues.name);
      }
    }

    //iterate through unique names Arr to find albums attached to each library

    let userLibraries = [];

    for (let i = 0; i < uniqueNameArr.length; i++) {
      let name = uniqueNameArr[i];

      const albumsList = await db.User.findAll({
        where: {
          id: userId,
        },
        include: [
          {
            model: db.Album,
            as: "AlbumLibraries",
            through: {
              where: {
                name: `${name}`,
              },
            },
          },
        ],
      });
      let obj = {}
      obj[name] =  albumsList[0].AlbumLibraries
      userLibraries.push(obj);
    }
    console.log(userLibraries[0]);
    // console.log(userLibraries[0]['test-library3'][0]['name']);
    // console.log(userLibraries[0]['test-library3'][0]['albumArt']);

    // console.log(userLibraries[1][1].dataValues.name);

    res.render("libraryList", { userLibraries, uniqueNameArr });
  })
);

router.get(
  "/:name",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    //genenerate a library showing a list of albums

    const { userId } = req.session.auth;
    const user = await db.User.findOne({
      where: { id: userId },
    });

    const libraryName = req.params.name;

    let libArr = libraryName.split(" ");
    const name = libArr.join("-");

    const libraryUser = await db.AlbumLibrary.findOne({
      where: {
        name,
      },
    });
    // console.log(libraryUser.userId);

    const userLibrary = await db.User.findAll({
      where: {
        id: libraryUser.userId,
      },
      include: [
        {
          model: db.Album,
          as: "AlbumLibraries",
          through: {
            where: {
              name: `${name}`,
            },
          },
        },
      ],
    });

    // console.log(userLibrary[0].AlbumLibraries);
    // console.log(userId);

    res.render("library", { userLibrary, libraryName, user });
  })
);

const libraryValidator = [];

router.post(
  "/library/add",
  csrfProtection,
  requireAuth,
  libraryValidator,
  asyncHandler(async (req, res) => {
    //from the profile page & the library list, click a button and a form will prompt the user to be able to add a library
    //restrict name to just letters, spaces, and numbers
    //name in data base has dashes for spaces

    const { name } = req.body;

    const newLibrary = await AlbumLibrary.create({
      name,
      userId: req.session.user.userId,
    });

    res.render("libraryAdd");
  })
);

router.post(
  "/library/edit",
  csrfProtection,
  requireAuth,
  libraryValidator,
  asyncHandler(async (req, res) => {
    //after clicking on edit (for my own library) I am able to modify the name of the library

    res.render("libraryAdd");
  })
);

router.post(
  "/library/delete",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    //on my profile page, I can delete my library

    const library = await AlbumLibraries.findAll({
      where: {
        name: libraryName,
        userId: req.session.user.userId,
      },
    });
    await library.destroy();

    res.render("libraryList");
  })
);

module.exports = router;
