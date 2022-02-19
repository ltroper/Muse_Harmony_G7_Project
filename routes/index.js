const express = require("express");
const { csrfProtection, asyncHandler } = require("./util");
const { loginUser, logoutUser } = require("../auth");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const router = express.Router();

/* GET home page. */

router.get("/", csrfProtection, (req, res) => {
  // console.log(req.csrfToken());
    const album = await db.Album.findAll({
    where: { id: albumId },
    include: {
      model:db.Artist
      },
      limit: 10,
    });

  res.render("index", {
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;
