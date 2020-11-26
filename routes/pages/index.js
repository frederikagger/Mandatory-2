const router = require("express").Router();
const path = require("path");
const auth = require("../../middleware/auth");
const User = require("../../models/user");

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

router.get("/contact", auth, async (req, res) => {
  return res.sendFile(path.resolve("public/html/contact.html"));
});

router.get("/resetpassword/:id", async (req, res, next) => {
  const uuid = req.params.id;
  console.log(uuid);
  try {
    const user = await User.findOne({uuid});
    if (user) {
      return res.sendFile(path.resolve("public/html/resetpassword.html"));
    }
    return res.sendFile(path.resolve("public/html/404.html"));
  } catch (error) {
    next(error);
  }
  router.get("*", async (req, res) => {
    res.redirect("/");
  });
});

module.exports = router;
