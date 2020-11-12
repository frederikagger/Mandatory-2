const router = require("express").Router();
require("../../db/mongoose.js");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  let { password, username, email } = req.body;
  console.log(password);
  password = await bcrypt.hash(password, 8);
  const user = new User({ password, username, email });
  console.log(user);
  try {
    await user.save();
    console.log(`User ${user.username} was created`);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
