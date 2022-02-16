const { csrfProtection, asyncHandler } = require("./util");
const { loginUser, logoutUser } = require("../auth");
const { check, validationResult } = require("express-validator");
const db = require("../db/models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.get("/", csrfProtection, (req, res) => {
  res.render("modal", {
    title: "Modal Form",
    csrfToken: req.csrfToken(),
  });
});

module.exports = router;
