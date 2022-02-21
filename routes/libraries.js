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
      let obj = {};
      obj[name] = albumsList[0].AlbumLibraries;
      userLibraries.push(obj);
    }

    res.render("libraryList", { userLibraries, uniqueNameArr, userId });
  })
);

router.get(
  "/add/:albumId",
  csrfProtection,
  requireAuth,
  asyncHandler((req, res) => {
    const albumId = req.params.albumId;
    res.render("libraryAdd", {
      title: "Add library",
      csrfToken: req.csrfToken(),
      albumId,
    });
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
    const albumList = userLibrary[0].AlbumLibraries;
    const nameNoDashesArr = name.split("-");
    const nameToPass = nameNoDashesArr.join(" ");
    res.render("library", { albumList, nameToPass, user });
  })
);

router.post(
  "/add/:albumId",
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    //from the profile page & the library list, click a button and a form will prompt the user to be able to add a library
    //restrict name to just letters, spaces, and numbers
    //name in data base has dashes for spaces
    const albumId = req.params.albumId;
    const unfactoredName = req.body.libraryName;
    const libArray = unfactoredName.split(" ");
    const name = libArray.join("-");

    const newLibrary = await db.AlbumLibrary.create({
      name,
      userId: res.locals.userId,
      albumId,
    });

    res.redirect(`/libraries`);
  })
);

router.post(
  "/library/edit",
  csrfProtection,
  requireAuth,
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

router.post(
  "/:name",
  asyncHandler(async (req, res) => {
    const { name, userId, albumId } = req.body;

    const test = await db.AlbumLibrary.findOne({
      where: {
        name,
        userId,
        albumId,
      },
    });
    if (!test) {
      const newLibrary = await db.AlbumLibrary.create({
        name,
        userId,
        albumId,
      });
      res.json({ newLibrary });
    }
  })
);

router.delete(
  "/:name",
  asyncHandler(async (req, res) => {
    const name = req.params.name;
    const userId = res.locals.userId;

    // console.log(`NAME: ${name}`)

    const library = await db.AlbumLibrary.findAll({
      where: {
        name,
        userId,
      },
    });
    if (library) {
      for (let i = 0; i < library.length; i++) {
        await library[i].destroy();
      }
      // res.json({library})
      console.log("redirecting");
      res.redirect("/libraries");
    }
  })
);

router.delete(
  "/:name/:albumId",
  asyncHandler(async (req, res) => {
    const name = req.params.name;
    const userId = res.locals.userId;
    const albumId = req.params.albumId;

    const album = await db.AlbumLibrary.findOne({
      where: {
        name,
        userId,
        albumId,
      },
    });
    if (album) {
      await album.destroy();
    }
    res.json(album);
  })
);

module.exports = router;
