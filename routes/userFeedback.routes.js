import express from "express";
import {
  getUserFeedbacks,
  createUserFeedback,
  updateUserFeedback,
  deleteUserFeedback,
} from "../controllers/userFeedback.controller.js";

const router = express.Router();

//GET user's feedbacks
router.get("/:userId", getUserFeedbacks);

//POST create a box (user)
router.post("/", createUserFeedback);

//UPDATE user's feedback
router.put("/", updateUserFeedback);

//DELETE user's feedback
router.delete("/", deleteUserFeedback);

export default router;
