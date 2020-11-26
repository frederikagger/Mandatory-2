const express = require("express");
const app = express();
require("./db/mongoose.js");
const routes = require("./routes/api");
const pages = require("./routes/pages/index")
const morgan = require("morgan")
const cookieparser = require("cookie-parser");
require("dotenv").config();

app
  .use(morgan("dev"))
  .use(cookieparser())
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes)
  .use(pages);

module.exports = app