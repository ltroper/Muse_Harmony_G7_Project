const { csrfProtection, asyncHandler } = require("./util");
const { loginUser, logoutUser } = require("../auth");
const { check, validationResult } = require("express-validator");
const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db/models");

const router = express.Router();

router.get("/:name", asyncHandler (async (req, res, next) => {

    const nameLibrary = req.params.id

    // const userLibrary = await db.AlbumLibrary.findOne(nameLibrary,{
    //     include: {
    //       model: db.Album,
    //       as: 'AlbumLibraries'
    //     },
    //   })
}));

module.exports = router;
