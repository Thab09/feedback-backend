import Joi from "joi";

const getUserBoxesSchema = Joi.object({
  userId: Joi.number().integer().required(),
});

const createBoxSchema = Joi.object({
  userId: Joi.number().integer().required(),
  userName: Joi.string().max(255).required(),
  boxTitle: Joi.string().min(5).max(500).required(),
  boxDescription: Joi.string().min(10).max(800).required(),
  boxOpen: Joi.boolean().required(),
  boxPublic: Joi.boolean().required(),
});

const updateBoxSchema = Joi.object({
  userId: Joi.number().integer().required(),
  boxId: Joi.number().integer().required(),
  boxTitle: Joi.string().min(5).max(500).required(),
  boxDescription: Joi.string().min(10).max(800).required(),
  boxOpen: Joi.boolean().required(),
  boxPublic: Joi.boolean().required(),
});

const deleteBoxSchema = Joi.object({
  userId: Joi.number().integer().required(),
  boxId: Joi.number().integer().required(),
});

export {
  getUserBoxesSchema as validateUserId,
  createBoxSchema as validateBoxCreation,
  updateBoxSchema as validateBoxUpdation,
  deleteBoxSchema as validateBoxDeletion,
};
