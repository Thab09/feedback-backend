import express from "express";
import {
  getUserFeedbacks,
  updateUserFeedback,
} from "../controllers/userFeedbackControllers.js";

const router = express.Router();

//GET user's feedbacks
router.get("/:userid", getUserFeedbacks);

//UPDATE user's feedback
router.put("/", updateUserFeedback);

export default router;
