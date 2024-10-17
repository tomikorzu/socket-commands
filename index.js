import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { join } from "path";

dotenv.config();

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./index.html"));
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on url http://localhost:${process.env.PORT}`);
});
