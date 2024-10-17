import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const server = createServer(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const staticRoot = join(__dirname, "public");

console.log(staticRoot);

app.use(express.static(staticRoot));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "./index.html"));
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on url http://localhost:${process.env.PORT}`);
});
