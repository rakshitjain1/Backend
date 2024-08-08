import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
});



connectDB()






/*

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// Database connect
(async () => {
    try {
        // const mongoUri = `${process.env.MONGODB_URI}/${DB_NAME}`;
        // console.log("Connecting to MongoDB with URI:", mongoUri);
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("error", error);
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("error", error);
    }
})();

*/