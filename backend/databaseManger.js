const { MongoClient, ObjectID } = require("mongodb");

console.log(process.env.USERNAME1);
const con = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@mandatory-2.iqs81.mongodb.net/mandatory-2`;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "auth";

const registerUser = (user) => {
  MongoClient.connect(
    con,
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        return console.log("failed to connect to database");
      }

      const db = client.db(databaseName);
      db.collection("users").insertOne(user, (error, result) => {
        if (error) {
          return console.log("Failed to insert");
        }
        console.log(result.ops);
      });
    }
  );
};

module.exports = {registerUser}
