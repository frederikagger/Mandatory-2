const router = require("express").Router();
require("../../db/mongoose.js");
const User = require("../../models/user");

router.post("/register", async (req, res, next) => {
  const user = new User(req.body);
  try {
    const ref = await user.save();
    console.log(ref);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
