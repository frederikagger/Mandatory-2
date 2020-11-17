const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.methods.createJWT = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), exp: Math.floor(Date.now() / 1000) + 60 * 60 },
    process.env.secret
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

/* userSchema.pre("save", async function (next) {
  const user = this;
  console.log("presave method");
  next();
}); */

const User = mongoose.model("User", userSchema);

module.exports = User;
