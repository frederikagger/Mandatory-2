const express = require("express");
const app = express();
const routes = require("./routes/api");
const pages = require("./routes/pages/index");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 3000;

app
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes)
  .use(pages);

app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
);