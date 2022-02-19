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
    include: {
      model:db.Artist
      }
    });




    const albumReviews = await db.Review.findAll({
        where: {albumId},
      });

    res.render("albumPage", {album, albumReviews})

}));

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

router.put("/:id/:reviewId", asyncHandler(async (req, res) => {

  const reviewId = req.body.reviewId;
  const content = req.body.content;

  const review = await db.Review.findByPk(reviewId)
    review.content = content;
    await review.save()
    res.json({review})
  }))


router.delete("/ab/:reviewId", asyncHandler(async (req, res) => {
  const reviewId = req.params.reviewId;
  const review = await db.Review.findByPk(reviewId)
  if (review){
    await review.destroy();
    res.json({review})
  }
}))





module.exports = router;
