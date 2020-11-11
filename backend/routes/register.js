const router = require("express").Router();
const { registerUser } = require("../databaseManager.js");

router.post("/register", async (req, res) => {
  const user = req.body;
  try {
    await registerUser(user);
    return res.sendStatus(200);
  } catch(error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
