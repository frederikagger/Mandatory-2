const router = require("express").Router();
require("../../db/mongoose.js");
const User = require("../../models/user");

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const query = User.where({ username: username, password: password });
  await query.findOne((error, user) => {
    if (error) {
      console.log(error);
      next(error);
    }
    if (user) {
      console.log("Found user: ",user);
      res.sendStatus(200);
    }
    else {
      console.log("User not found");
      res.sendStatus(404);
    }
  });
});

module.exports = router;
