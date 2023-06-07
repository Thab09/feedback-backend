import pool from "../config/databaseConfig.js";

//GET all feedbacks for a specific box
const getFeedbacksService = async (boxId) => {
  const [result] = await pool.query(
    `
    SELECT * 
    FROM feedbacks
    WHERE box_id = ?
    `,
    [boxId]
  );
  return result;
};

//POST create a feedback (guests)
const createGuestFeedbackService = async (
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

const checkIfBoxExists = async (boxId) => {
  const [check] = await pool.query(
    `
    SELECT * 
    FROM boxes
    WHERE box_id = ?`,
    [boxId]
  );
  if (check.length === 0) return false;

  return true;
};
export { getFeedbacksService, createGuestFeedbackService, checkIfBoxExists };
