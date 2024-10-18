import { mongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new mongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("EduLink");
    return db;
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

export default connectDB;
