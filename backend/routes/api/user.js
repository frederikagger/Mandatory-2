const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const auth = require("../../middleware/auth");

router.put("/user/:username", auth, async (req, res, next) => {
  const { username, password, email } = req.body;
  const query = User.where({ username: username });
  try {
    const user = await query.findOne();
    const { _id } = user;
    if (!user) {
      throw createError(400, "No user with the current username exist");
    } else {
      const user = new User({ username, password, email, _id });
      await User.updateOne(user);
      console.log(`User with username ${user.username} was updated`);
      return res.sendStatus(200);
    }
  } catch (error) {
    next(error);
  }
});g

module.exports = router;
