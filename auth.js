const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res, user) => {
  req.session.destroy();
  res.clearCookie("museharmony.sid");
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect("/");
  }
  return next();
};

const restoreUser = async (req, res, next) => {
  if (req.session.auth) {
    const { userId } = req.session.auth;
    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = true;
        res.locals.userId = userId;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next();
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};
