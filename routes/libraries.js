const { csrfProtection, asyncHandler } = require("./util");
const { loginUser, logoutUser, requireAuth } = require("../auth");
const { check, validationResult } = require("express-validator");
const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db/models");

const router = express.Router();

router.get("/:name", requireAuth, asyncHandler (async (req, res, next) => {
  const { userId } = req.session.auth;
  const user = await db.User.findOne({
    where: { id: userId },
  });

  const libraryName = req.params.name

  // console.log(typeof(libraryName));
  let libArr = libraryName.split(' ');
  const name = libArr.join('-');

  const userLibrary = await db.AlbumLibrary.findAll({
    where: {name: `${name}`},
  });

  // const userLibrary = await db.User.findAll({
  //   where: {
  //     id: userId,
  //   },
  //   include: [{
  //     model: db.Album,
  //     as: "AlbumLibraries",
  //     through: {
  //       where: {
  //         name: `${name}`, // Assuming clientUser.is_manager?
  //       },
  //     }
  //   }],
  // })

  console.log(userLibrary);
  res.render("library", {userLibrary, libraryName, user});
}));

module.exports = router;
