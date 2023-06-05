import {
  getUserFeedbacksService,
  createUserFeedbackService,
  updateUserFeedbackService,
  deleteUserFeedbackService,
  checkIfExists,
} from "../services/userFeedback.service.js";

//GET user's feedbacks
const getUserFeedbacks = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await getUserFeedbacksService(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//POST create user feedback
const createUserFeedback = async (req, res) => {
  try {
    const { boxId, userId, userName, feedbackDescription } = req.body;
    const result = await createUserFeedbackService(
      boxId,
      userId,
      userName,
      feedbackDescription
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

//UPDATE user's feedback
const updateUserFeedback = async (req, res) => {
  try {
    const { userId, feedbackId, feedbackDescription } = req.body;
    const check = await checkIfExists(userId, feedbackId);
    if (!check) {
      return res.status(404).json({ error: "Box not found" });
    }
    const result = await updateUserFeedbackService(
      feedbackId,
      feedbackDescription
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

//DELETE user's feedback
const deleteUserFeedback = async (req, res) => {
  try {
    const userId = req.query.userId;
    const feedbackId = req.query.feedbackId;
    const check = await checkIfExists(userId, feedbackId);
    if (!check) {
      return res.status(404).json({ error: "Box not found" });
    }
    const result = await deleteUserFeedbackService(userId, feedbackId);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

export {
  getUserFeedbacks,
  createUserFeedback,
  updateUserFeedback,
  deleteUserFeedback,
};