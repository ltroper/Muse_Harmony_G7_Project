const { csrfProtection, asyncHandler } = require("./util");
const { check, validationResult } = require("express-validator");
const { loginUser, logoutUser, requireAuth} = require("../auth");
const db = require("../db/models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");



router.get("/", requireAuth, async (req, res) => {
    const albums = await db.Album.findAll()

    res.render("albums", {albums})
})


router.get("/:id", requireAuth, asyncHandler (async (req, res) => {
    const albumId = req.params.id;
    const album = await db.Album.findOne({
    where: { id: albumId },
    });

    const albumReviews = await db.Album.findOne({
        where: {id: albumId},
        include: {
          model: db.User,
          as: 'Reviews'
        }
      })

    // console.log(albumReviews.Reviews[0].Review.content)

    const review = albumReviews.Reviews[0].Review.content
    res.render("albumPage", {album, review})

}))


module.exports = router;
