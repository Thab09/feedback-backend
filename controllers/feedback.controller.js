import {
  getFeedbacksService,
  createGuestFeedbackService,
  checkIfBoxExists,
} from "../services/feedback.service.js";

import {
  validateBoxId,
  validateGuestFeedback,
} from "../validations/feedback.validator.js";

//GET all feedbacks for a specific box
const getFeedbacks = async (req, res) => {
  try {
    const { error } = validateBoxId.validate(req.params);
    if (error) {
      return res.status(404).send(error.details);
    }

    const { boxId } = req.params;

    const check = await checkIfBoxExists(boxId);
    if (!check) {
      return res.status(404).json({ error: "Box not found" });
    }

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
    const { error } = validateGuestFeedback.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(404).send(error.details);
    }

    const { boxId, userId, userName, feedbackDescription } = req.body;

    const check = await checkIfBoxExists(boxId);
    if (!check) {
      return res.status(404).json({ error: "Box not found" });
    }

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
