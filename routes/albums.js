const { csrfProtection, asyncHandler } = require("./util");
const { check, validationResult } = require("express-validator");
const { loginUser, logoutUser, requireAuth } = require("../auth");
const db = require("../db/models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.get("/", requireAuth, async (req, res) => {
  const albums = await db.Album.findAll({
    include: {
      model: db.Artist,
    },
  });
  const userId = res.locals.userId;

  const userLibraries = await db.AlbumLibrary.findAll({
    where: {
      userId,
    },
  });
  const libraryNamesSet = new Set();
  for (let i = 0; i < userLibraries.length; i++) {
    libraryNamesSet.add(userLibraries[i].name);
  }

  const libraryNames = Array.from(libraryNamesSet);

  res.render("albums", { albums, libraryNames, userId });
});

router.get(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const albumId = req.params.id;
    const album = await db.Album.findOne({
      where: { id: albumId },
      include: {
        model: db.Artist,
      },
    });

    const albumReviews = await db.Review.findAll({
      where: { albumId },
    });

    res.render("albumPage", { album, albumReviews });
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = res.locals.userId;
    const albumId = req.params.id;
    const rating = req.body.rating;
    const content = req.body.review;

    await db.Review.create({
      content,
      rating,
      albumId,
      userId,
    });

    res.redirect(`/albums/${albumId}`);
  })
);

router.put(
  "/:id/:reviewId",
  asyncHandler(async (req, res) => {
    const reviewId = req.body.reviewId;
    const content = req.body.content;
    const rating = req.body.rating;

    const review = await db.Review.findByPk(reviewId);
    review.content = content;
    review.rating = rating;
    await review.save();
    res.json({ review });
  })
);

router.delete(
  "/:id/:reviewId",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await db.Review.findByPk(reviewId);
    if (review) {
      await review.destroy();
      res.json({ review });
    }
  })
);

module.exports = router;
