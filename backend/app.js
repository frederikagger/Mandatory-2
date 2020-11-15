const express = require("express");
const app = express();
require("./db/mongoose.js");
const routes = require("./routes/api");
const pages = require("./routes/pages/index")
const logger = require("./middleware/logger")

app
  .use(logger)
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes)
  .use(pages);

module.exports = app