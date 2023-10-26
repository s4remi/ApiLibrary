import { query } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connection_url = process.env.MONGO;
