import express from "express";
import {
  getFeedbacks,
  createFeedback,
} from "../controllers/feedbackControllers.js";

const router = express.Router();

//GET all feedbacks for a specific box
router.get("/:boxId", getFeedbacks);

//POST create a box
router.post("/", createFeedback);

export default router;
