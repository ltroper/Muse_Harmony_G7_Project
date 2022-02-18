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



    //fix this!!!
    const albumReviews = await db.Review.findAll({
        where: {albumId},
      });





      console.log(albumReviews[0].content)
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

router.put("/:id/reviewId", asyncHandler(async (req, res) => {

    //1. extract reviewId
    //2. grab new text from req.body
    //3. update review content in db with new text db.table.update
    //4. send JSON object message: 'success' (if successful)




}))



module.exports = router;
