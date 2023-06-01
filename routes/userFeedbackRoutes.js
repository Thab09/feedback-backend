import express from "express";
import {
  getUserFeedbacks,
  updateUserFeedback,
  deleteUserFeedback,
} from "../controllers/userFeedbackControllers.js";

const router = express.Router();

//GET user's feedbacks
router.get("/:userid", getUserFeedbacks);

//UPDATE user's feedback
router.put("/", updateUserFeedback);

//DELETE user's feedback
router.delete("/", deleteUserFeedback);

export default router;
