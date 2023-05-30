import pool from "../config/databaseConfig.js";

//GET user's feedbacks
const getUserFeedbacks = async (req, res) => {
  const { userId } = req.params;
  const [result] = await pool.query(
    `
      SELECT * 
      FROM feedbacks
      WHERE user_id = ?`,
    [userId]
  );
  res.status(200).json(result);
};

//UPDATE user's feedback
const updateUserFeedback = async (req, res) => {
  const { userId, feedbackId, feedbackDescription } = req.body;
  const [checkIfExists] = await pool.query(
    `
          SELECT * 
          FROM feedbacks
          WHERE user_id = ?
          AND feedback_id = ?`,
    [userId, feedbackId]
  );
  if (checkIfExists.length === 0) {
    // Row not found, send error response
    return res.status(404).json({ error: "Row not found" });
  }

  const [result] = await pool.query(
    `
    UPDATE feedbacks
    SET feedback_description = ?
    WHERE feedback_id = ?
    `,
    [feedbackDescription, feedbackId]
  );

  res.status(200).json(result);
};

export { getUserFeedbacks, updateUserFeedback };
