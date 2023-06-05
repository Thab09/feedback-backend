import {
  getFeedbacksService,
  createGuestFeedbackService,
} from "../services/feedback.service.js";

//GET all feedbacks for a specific box
const getFeedbacks = async (req, res) => {
  try {
    const { boxId } = req.params;
    const result = await getFeedbacksService(boxId);
    if (result.length === 0) {
      return res.status(404).json("No Content Found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

//POST create a feedback (Guest)
const createGuestFeedback = async (req, res) => {
  try {
    const { boxId, userId, userName, feedbackDescription } = req.body;
    const result = await createGuestFeedbackService(
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

export { getFeedbacks, createGuestFeedback };
