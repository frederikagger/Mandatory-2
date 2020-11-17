const router = require("express").Router();
const path = require("path");
const auth = require("../../middleware/auth");

router.get("/", async (req, res) => {
  return res.redirect("/index");
});

router.get("/index", auth, async (req, res) => {
  return res.sendFile(path.resolve("public/html/index.html"));
});

router.get("/login", async (req, res) => {
  return res.sendFile(path.resolve("public/html/login.html"));
});

router.get("/signup", async (req, res) => {
  return res.sendFile(path.resolve("public/html/signup.html"));
});

router.get("/forgotpassword", async (req, res) => {
  return res.sendFile(path.resolve("public/html/forgotPassword.html"));
});

router.get("/contact", async (req, res) => {
  return res.sendFile(path.resolve("public/html/contact.html"));
});

module.exports = router;
