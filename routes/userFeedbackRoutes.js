import express from "express";
import { getUserFeedbacks } from "../controllers/userFeedbackControllers.js";

const router = express.Router();

//GET user's feedbacks
router.get("/:userid", getUserFeedbacks);

export default router;
