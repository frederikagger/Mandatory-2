const router = require("express").Router();
require("../../db/mongoose.js");
const User = require("../../models/user");

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const query = User.where({ username: username, password: password });
  const result = await query.findOne((error, user) => {
    if (error) {
      console.log(error);
      next(error);
    }
    if (user) {
      console.log("Found user: ",user);
      res.sendStatus(200);
    }
  });
  if (!result){
    console.log("User not found");
    res.sendStatus(404);
  }
});

module.exports = router;
