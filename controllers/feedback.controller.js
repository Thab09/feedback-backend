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
      return res.status(204).json("Box not found");
    }

    const result = await getFeedbacksService(boxId);
    if (result.length === 0) {
      return res.status(204).json("There are no feedbacks on this box yet.");
    }

    return res.status(200).json(result);
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

    const { boxId, userName, feedbackDescription } = req.body;

    const check = await checkIfBoxExists(boxId);
    if (!check) {
      return res.status(204).json("Box not found");
    }

    const result = await createGuestFeedbackService(
      boxId,
      userName,
      feedbackDescription
    );

    return res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

export { getFeedbacks, createGuestFeedback };
