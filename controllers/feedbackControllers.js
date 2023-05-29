import pool from "../config/databaseConfig.js";

//GET all feedbacks for a specific box
const getFeedbacks = async (req, res) => {
  const { boxId } = req.params;
  const [result] = await pool.query(
    `
    SELECT * 
    FROM feedbacks
    WHERE box_id = ?`,
    [boxId]
  );
  res.status(200).json(result);
};

//POST create a feedback
const createFeedback = async (req, res) => {
  const { boxId, userId, userName, feedbackDescription } = req.body;
  const [result] = await pool.query(
    `
        INSERT INTO feedbacks 
        (box_id, user_id, user_name, feedback_description )
        VALUES (?,?,?,?)`,
    [boxId, userId, userName, feedbackDescription]
  );
  res.status(200).json(result);
};

export { getFeedbacks, createFeedback };
