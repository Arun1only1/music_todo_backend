import express from "express";
import { connectDB } from "./db.connect.js";

const app = express();

// connect db
connectDB();

// register routes

const port = 4000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
