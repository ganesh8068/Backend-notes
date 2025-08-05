// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; // ✅ corrected path

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`🚀 Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection failed !!", error);
  });


// import mongoose from "mongoose";
// import {DB_name} from "./constants";

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();

*/
