// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import app from "./app.js";
import connectDB from "./db/index.js";
// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.error("MOngo db connection failed:", error);
    throw error;
  });
// import express from "express";
// const app = express();
// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening the port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("error:", error);
//     throw error;
//   }
// })();
