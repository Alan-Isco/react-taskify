import express from "express";
import { getCategories } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getCategories);

// router.post("/", addPost);

export default router;
