import pool from "../config/databaseConfig.js";

// http://localhost:8080/api/boxes/user?userId=xyz&boxId=123
//GET user's boxes
const getUserBoxes = async (req, res) => {
  const { userid } = req.params;
  //   const userId = req.query.userId;
  //   const boxId = req.query.boxId; since we are getting all the boxes
  const [result] = await pool.query(
    `
    SELECT * 
    FROM boxes
    WHERE user_id = ?`,
    [userid]
  );
  res.status(200).json(result);
};

//POST create a box
const createBox = async (req, res) => {
  const { userID, userName, boxTitle, boxDescription, boxOpen, boxPublic } =
    req.body;
  const [result] = await pool.query(
    `
      INSERT INTO boxes 
      (user_id, user_name, box_title, box_description, box_open, box_public)
      VALUES (?,?,?,?,?,?)`,
    [userID, userName, boxTitle, boxDescription, boxOpen, boxPublic]
  );
  return getBox(result.insertId);
};

export { getUserBoxes, createBox };
