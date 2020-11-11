const { MongoClient, ObjectID } = require("mongodb");

const DB_URL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@${process.env.URL_CLOUD_DB}`;
const databaseName = "auth";

const client = new MongoClient(DB_URL, { useUnifiedTopology: true });

/* function that connects to the db and return the db*/
const connectDB = async () => {
  await client.connect();
  // Establish and verify connection
  const db = client.db(databaseName);
  await client.db(databaseName).command({ ping: 1 });
  console.log("Connected successfully to server");
  return db;
};

const registerUser = async (user) => {
  const db = await connectDB();
  db.collection("users").insertOne(user, (error, result) => {
    if (error) {
      throw error;
    }
    console.log(`User was registered with id = ${result.insertedId}`);
    client.close();
    console.log("Connection was closed");
  });
};

module.exports = { registerUser };
