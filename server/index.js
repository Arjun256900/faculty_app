import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connectDb();    // From db.js

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
