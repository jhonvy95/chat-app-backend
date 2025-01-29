import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});
