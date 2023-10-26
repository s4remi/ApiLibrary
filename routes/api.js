import express, { query } from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
export const router = express.Router();

router.post("searchByIsbn", bodyParser.json(), async (req, res) => {
  const isbn = req.body.gotoresult;
  const query = { ISBN: parseInt(isbn, 10) };
  console.log(query);
});

export default router;
