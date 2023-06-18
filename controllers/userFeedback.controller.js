import {
  getUserFeedbacksService,
  createUserFeedbackService,
  updateUserFeedbackService,
  deleteUserFeedbackService,
  checkIfExists,
} from "../services/userFeedback.service.js";

import {
  validateUserId,
  validateUserFeedbackCreation,
  validateUserFeedbackUpdation,
  validateUserFeedbackDeletion,
} from "../validations/userFeedback.validator.js";

//GET user's feedbacks
const getUserFeedbacks = async (req, res) => {
  try {
    const { error } = validateUserId.validate(req.params);
    if (error) {
      return res.status(404).send(error.details);
    }

    const { userId } = req.params;

    const result = await getUserFeedbacksService(userId);
    if (result.length === 0) {
      return res.status(204).json("You have not given any feedbacks yet.");
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//POST create user feedback
const createUserFeedback = async (req, res) => {
  try {
    const { error } = validateUserFeedbackCreation.validate(req.body);
    if (error) {
      return res.status(404).send(error.details);
    }

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
    const { error } = validateUserFeedbackUpdation.validate(req.body);
    if (error) {
      return res.status(404).send(error.details);
    }

    const { userId, feedbackId, feedbackDescription } = req.body;

    const check = await checkIfExists(userId, feedbackId);
    if (!check) {
      return res.status(204).json("Feedback does not exist.");
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
    const { error } = validateUserFeedbackDeletion.validate(req.query);
    if (error) {
      return res.status(404).send(error.details);
    }

    const userId = req.query.userId;
    const feedbackId = req.query.feedbackId;

    const check = await checkIfExists(userId, feedbackId);
    if (!check) {
      return res.status(204).json("Feedback does not exist.");
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
