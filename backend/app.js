const express = require("express");
const app = express();
const routes = require("./routes/login");

app.use(express.static("../frontend"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}!`)
);
