const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const query = User.where({ username: username });
  try {
    const user = await query.findOne();
    if (!user) {
      throw createError(400, "No user with the current username exist");
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = await user.createJWT();
      return res.status(200).send(token);
    } else throw createError(400, "The password is incorrect");
  } catch (error) {
    next(error); // * parsing the error to the error handler
  }
});

module.exports = router;
