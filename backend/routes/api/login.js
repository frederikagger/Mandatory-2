const router = require("express").Router();
require("../../db/mongoose.js");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const query = User.where({ username: username });
  const result = await query.findOne(async (error, user) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        console.log("Found user: ", user);
        res.sendStatus(200);
      } else return next(new Error("The password is incorrect."));
    }
  });
  if (!result) {
    console.log("User not found");
    res.status(404).send("No user with the current username exist.");
  }
});

module.exports = router;
