const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@mandatory-2.iqs81.mongodb.net/mandatory-2`;
//const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "auth";

const registerUser = async (user) => {
  await MongoClient.connect(
    connectionURL,
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        console.log("failed to connect to database");
        await Promise.reject(new Error("Failed to connect to database"));
      
      }
      const db = client.db(databaseName);
      db.collection("users").insertOne(user, (error, result) => {
        if (error) {
          console.log("Failed to insert");
          await Promise.reject(new Error("Failed to insert into database"))
        }
      });
    }
  );
};

module.exports = {registerUser}
