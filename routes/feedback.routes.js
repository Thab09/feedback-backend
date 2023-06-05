import express from "express";
import {
  getFeedbacks,
  createGuestFeedback,
} from "../controllers/feedback.controller.js";

const router = express.Router();

//GET all feedbacks for a specific box
router.get("/:boxId", getFeedbacks);

//POST create a box (Guest)
router.post("/", createGuestFeedback);

export default router;
