const path = require("path");

const auth = (req, res, next) => {
  console.log("auth middleware running");
  const loggedIn = false;
  if (loggedIn) {
    next();
  } else {
    return res.sendFile(path.resolve("public/html/login.html"));
  }
};

module.exports = auth;
