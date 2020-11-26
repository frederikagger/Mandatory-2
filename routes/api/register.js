const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

const salt = 8;

router.post("/register", async (req, res, next) => {
  try {
    let { password, username, email } = req.body;
    email = email.toLowerCase();
    if (password && username && email) {
      password = await bcrypt.hash(password, salt);
    } else throw createError(400, "Missing parameters");
    const user = new User({ password, username, email });
    await user.save();
    console.log(`User ${user.username} was created`);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
