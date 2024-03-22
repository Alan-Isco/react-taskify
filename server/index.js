import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
// INITIALIZATION
const app = express();

// CONFIGURATIONS
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
