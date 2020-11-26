require("dotenv").config();
const request = require("supertest");
const app = require("../app");
const User = require("../models/user");

const user = {
  username: "frederik",
  password: "password",
  email: "test@test.com",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(user).save();
});

test("update user", async () => {
  await request(app)
    .put("/user/"+user.username)
    .send({
      username: "frederik",
      password: "pass",
      email: "test@test.com",
    })
    .expect(200);
});
