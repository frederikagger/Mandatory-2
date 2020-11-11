const router = require("express").Router();

router.post("/login", (req, res) => {
  // TODO: authenticate user
  res.sendStatus(200);
});

module.exports = router;
