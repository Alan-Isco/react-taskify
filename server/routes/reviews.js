import express from "express";
import { addReview, getReviews } from "../controllers/reviews.js";

const router = express.Router();

router.get("/", getReviews);

router.post("/", addReview);

export default router;
