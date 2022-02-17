const { csrfProtection, asyncHandler } = require("./util");
const { loginUser, logoutUser } = require("../auth");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/login", csrfProtection, (req, res) => {
  res.render("login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

const signupValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for username")
    .isLength({ max: 50 })
    .withMessage("username must be less than 50 characters"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 50 }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must be less than 50 characters"),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

const loginValidators = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 50 })
    .withMessage("Email must be less than 50 characters"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must be less than 50 characters"),
];

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];

    const validateErrors = validationResult(req);

    if (validateErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashPassword.toString()
        );
        if (passwordMatch) {
          loginUser(req, res, user);
          const userId = user.id;
          return res.redirect(`/users/${userId}`);
        }
      }

      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validateErrors.array().map((error) => error.msg);
    }

    res.render("login", {
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = await db.User.build();
    console.log(req.csrfToken());
    res.render("signup", {
      title: "Signup",
      user,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/signup",
  csrfProtection,
  signupValidators,
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const user = await db.User.build({
      username,
      email,
    });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashPassword = await bcrypt.hash(password, 10);
      user.hashPassword = hashPassword;
      await user.save();
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign Up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

// work on this. REMOVE TRY CATCH.
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await db.User.findOne({
      where: { id: userId },
    });

    const userLibrary = await db.AlbumLibrary.findAll({
      where: {
        userId,
      },
      limit: 10,
    });
    const reviewList = await db.Review.findAll({
      where: { userId },
      limit: 10,
    });
    //   try{
    //     const userLibrary = await db.AlbumLibrary.findAll({
    //       where: {
    //         userId
    //       },
    //       limit: 10
    //     })
    //   }catch{
    //     const userLibrary = 0
    //   }
    //   try{
    //     const reviewList = await db.Review.findAll({
    //       where: {userId},
    //       limit: 10
    //     })

    //   }catch{
    //     const reviewList= 0
    //   }
    //   try{
    //     const likedAlbums = await db.LikedAlbum.findAll({
    //       where: {userId},
    //       include: {Album}
    //     })
    //   }catch{
    //     const likedAlbums = 0
    //   }

    res.render("profile");
  })
);

module.exports = router;
