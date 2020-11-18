const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const auth = require("../../middleware/auth");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // limit each IP to 100 requests per windowMs
});

router.use("/login", limiter);

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
      res.status(200).send(token);
    } else throw createError(400, "The password is incorrect");
  } catch (error) {
    next(error); // * parsing the error to the error handler
  }
});

router.delete("/logout", auth, async (req, res, next) => {
  let user = req.user;
  user.tokens = [];
  user = new User(user);
  try {
    await user.save();
    return res.status(200).send("User was logged out");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
