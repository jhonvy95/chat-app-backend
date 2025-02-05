import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  connectDB();
});
