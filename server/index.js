import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());
connectDb();    // From db.js

app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
