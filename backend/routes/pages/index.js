const router = require("express").Router();
const path = require('path');

router.get("/login", (req, res) => {
    return res.sendFile(path.resolve("public/html/login.html"));
});

router.get("/signup", (req, res) => {
    return res.sendFile(path.resolve("public/html/signup.html"));
});

router.get("/forgotpassword", (req, res) => {
    return res.sendFile(path.resolve("public/html/forgotPassword.html"));
});

module.exports = router