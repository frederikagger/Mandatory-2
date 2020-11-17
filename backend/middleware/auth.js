const jwt = require("jsonwebtoken");
const User = require("../models/user");
const createError = require("http-errors");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.secret);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new createError("401", "Authentication failed");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.redirect("/login");
  }
};

module.exports = auth;
