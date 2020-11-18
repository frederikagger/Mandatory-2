const mongoose = require("mongoose");

//const DB_URL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@${process.env.URL_CLOUD_DB}`;
const DB_URL = `mongodb://${process.env.URL_LOCALHOST_DB}`;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
