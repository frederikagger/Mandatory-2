const router = require("express").Router();
const {registerUser} = require("../databaseManger.js");

router.post("/register", (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    };
    registerUser(user);
    return res.sendStatus(200);
});

module.exports = router;