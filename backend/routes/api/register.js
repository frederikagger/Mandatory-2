const router = require("express").Router();
require("../../db/mongoose.js");
const User = require("../../models/user");

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.sendStatus(200);
  } catch(error) {
    console.log(user);
    res.sendStatus(400)
  }

  /* try {
    return res.sendStatus(200);
  } catch(error) {
    console.log(error);
    return res.sendStatus(500);
  } */
});

module.exports = router;
