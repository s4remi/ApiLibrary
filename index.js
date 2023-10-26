import express, { query } from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
export const router = express.Router();
import apiRouter from "./routes/api.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.static("frontend"));

app.use(apiRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
