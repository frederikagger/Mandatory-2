const router = require("express").Router();

router.post("/login", (req, res) => {
  // TODO: authenticate user
  res.sendStatus(200);
});

router.get("/index", (req, res) => {
  res.send("GET request to the homepage");
});

module.exports = router;
