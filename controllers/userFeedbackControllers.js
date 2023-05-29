import pool from "../config/databaseConfig.js";

//GET user's feedbacks
const getUserFeedbacks = async (req, res) => {
  const { userid } = req.params;
  const [result] = await pool.query(
    `
      SELECT * 
      FROM feedbacks
      WHERE user_id = ?`,
    [userid]
  );
  res.status(200).json(result);
};

export { getUserFeedbacks };
