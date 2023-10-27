import express, { query } from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import { myDB } from "../db/MyDB.js";
export const router = express.Router();

router.post("/searchByIsbn", bodyParser.json(), async (req, res) => {
  const isbn = req.body.isbn;
  const query = { ISBN: parseInt(isbn, 10) };
  console.log(query);

  const bookInfo = await myDB.getBookByISBN({ query });
  console.log("inside the search by isbn");
  if (bookInfo) {
    return res
      .status(200)
      .json({ data: bookInfo, message: "successfully found" });
  } else {
    return res.status(401).json({ message: "Didn't find anything" });
  }
});

export default router;
