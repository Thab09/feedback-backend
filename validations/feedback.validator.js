import Joi from "joi";

const getFeedbackSchema = Joi.object({
  boxId: Joi.number().integer().required(),
});

const createGuestFeedbackSchema = Joi.object({
  boxId: Joi.number().integer().required(),
  userId: Joi.number().integer().required(),
  userName: Joi.string().max(255).required(),
  feedbackDescription: Joi.string().min(2).max(500).required(),
});

export {
  getFeedbackSchema as validateBoxId,
  createGuestFeedbackSchema as validateGuestFeedback,
};
