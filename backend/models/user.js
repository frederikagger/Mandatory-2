const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 6) {
        throw new Error("Password is too short");
      }
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
});

module.exports =  User ;
