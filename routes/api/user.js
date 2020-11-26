const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

const salt = 8;

router.put("/user/:uuid", async (req, res, next) => {
  try {
    const { uuid, password } = req.body;
    const user = await User.findOne({ uuid });
    if (!user) {
      throw createError(400, "No user with the current uuid exist");
    }
    user.password = await bcrypt.hash(password, salt);
    user.uuid = undefined;
    await user.save();
    console.log(`User with username ${user.username} was updated`);
    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
