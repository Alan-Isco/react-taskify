import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.js";

// INITIALIZATION
const app = express();

// MIDDLEWARE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// CONFIGURATIONS
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
