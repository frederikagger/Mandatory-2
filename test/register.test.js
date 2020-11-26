require("dotenv").config();
const request = require("supertest");
const app = require("../app");
const User = require("../models/user");

const user = {
  username: "frederik",
  password: "password",
  email: "test1@test.com"
}

beforeEach(async() => {
  await User.deleteMany();
  await new User(user).save();
});


test("register user", async () => {
  await request(app)
    .post("/register")
    .send({
      email: "test@test.com",
      username: "frede",
      password: "password",
    })
    .expect(201);
});

test("register user that already exist", async () => {
  await request(app)
    .post("/register")
    .send({
      user
    })
    .expect(400);
});

test("register user with missing parameters", async () => {
  await request(app)
    .post("/register")
    .send({
      username: "kaj",
      password: "password"
    })
    .expect(400);
});

test("register user with missing parameters", async () => {
  await request(app)
    .post("/register")
    .send({
      username: "kaj",
      password: "password"
    })
    .expect(400);
});
