import { getDB } from "../config/db.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { username, email, password, fullname } = req.body;

  if (!username || !email || !password || !fullname) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const db = getDB();
    const existingUser = await db.collection("users").findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      email,
      password: hashedPassword,
      fullname,
    };

    const result = await db.collection("users").insertOne(newUser);
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Error signing up", error);
    res.status(500).json({ message: "Error signing up" });
  }
};

export const signin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const db = getDB();
    const user = await db.collection("users").findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res
      .status(200)
      .json({ message: "User signed in successfully" }, { userID: user._id });
  } catch (error) {
    console.error("Error signing in", error);
    res.status(500).json({ message: "Error signing in" });
  }
};
