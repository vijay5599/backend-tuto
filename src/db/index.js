import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\nMongodb connected : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection Failed ", error);
    process.exit(1);
  }
};

export default connectDB;
