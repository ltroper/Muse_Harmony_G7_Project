const { csrfProtection, asyncHandler } = require("./util");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");



router.get("/", async (req, res) => {
    const albums = await db.Album.findAll()

    res.render("albums", {albums})
})


router.get("/:id", asyncHandler (async (req, res) => {
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

router.post("/:id", asyncHandler(async (req, res) =>{
    const content = req.body.review;
    const userId = res.locals.userId;
    const albumId = req.params.id;
    const rating = req.body.rating;

    await db.Review.create({
      content,
      rating,
      albumId,
      userId
    })

    res.redirect(`/albums/${albumId}`)


}))


module.exports = router;