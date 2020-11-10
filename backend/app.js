const express = require("express");
const app = express();
const routes = require("./routes/register");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 3000;

app
  .use(express.static("../frontend"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(routes);

app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
);