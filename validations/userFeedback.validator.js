import Joi from "joi";

const getUserFeedbacksSchema = Joi.object({
  userId: Joi.string().max(255).required(),
});

const createUserFeedbackSchema = Joi.object({
  boxId: Joi.number().integer().required(),
  userId: Joi.string().max(255).required(),
  userName: Joi.string().max(255).required(),
  feedbackDescription: Joi.string().min(2).max(500).required(),
});

const updateUserFeedbackSchema = Joi.object({
  userId: Joi.string().max(255).required(),
  feedbackId: Joi.number().integer().required(),
  feedbackDescription: Joi.string().min(2).max(500).required(),
});

const deleteUserFeedbackSchema = Joi.object({
  userId: Joi.string().max(255).required(),
  feedbackId: Joi.number().integer().required(),
});

export {
  getUserFeedbacksSchema as validateUserId,
  createUserFeedbackSchema as validateUserFeedbackCreation,
  updateUserFeedbackSchema as validateUserFeedbackUpdation,
  deleteUserFeedbackSchema as validateUserFeedbackDeletion,
};
