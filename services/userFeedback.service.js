import pool from "../config/databaseConfig.js";

//GET user's feedbacks
const getUserFeedbacksService = async (userId) => {
  const [result] = await pool.query(
    `
    SELECT * 
    FROM feedbacks
    WHERE user_id = ?`,
    [userId]
  );
  return result;
};

//POST create a feedback (users)
const createUserFeedbackService = async (
  boxId,
  userId,
  userName,
  feedbackDescription
) => {
  const [result] = await pool.query(
    `
      INSERT INTO feedbacks 
      (box_id, user_id, user_name, feedback_description )
      VALUES (?,?,?,?)
      `,
    [boxId, userId, userName, feedbackDescription]
  );
  return result;
};

//UPDATE user's feedback
const updateUserFeedbackService = async (feedbackId, feedbackDescription) => {
  const [result] = await pool.query(
    `
    UPDATE feedbacks
    SET feedback_description = ?
    WHERE feedback_id = ?
    `,
    [feedbackDescription, feedbackId]
  );

  return result;
};

//DELETE user's feedback
const deleteUserFeedbackService = async (userId, feedbackId) => {
  const [result] = await pool.query(
    `
    DELETE FROM feedbacks
    WHERE user_id = ? 
    AND feedback_id = ?;
    `,
    [userId, feedbackId]
  );

  return result;
};

const checkIfExists = async (userId, feedbackId) => {
  const [check] = await pool.query(
    `
    SELECT * 
    FROM feedbacks
    WHERE user_id = ?
    AND feedback_id = ?`,
    [userId, feedbackId]
  );
  if (check.length === 0) return false;

  return true;
};

export {
  getUserFeedbacksService,
  createUserFeedbackService,
  updateUserFeedbackService,
  deleteUserFeedbackService,
  checkIfExists,
};
