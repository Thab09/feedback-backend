import pool from "../config/databaseConfig.js";

//GET user's boxes
const getUserBoxes = async (req, res) => {
  const { userid } = req.params;
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
  const { userId, userName, boxTitle, boxDescription, boxOpen, boxPublic } =
    req.body;
  const [result] = await pool.query(
    `
      INSERT INTO boxes 
      (user_id, user_name, box_title, box_description, box_open, box_public)
      VALUES (?,?,?,?,?,?)`,
    [userId, userName, boxTitle, boxDescription, boxOpen, boxPublic]
  );
  return getBox(result.insertId);
};

//UPDATE user's box
const updateUserBox = async (req, res) => {
  const { userId, boxId, boxTitle, boxDescription, boxOpen, boxPublic } =
    req.body;
  const [checkIfExists] = await pool.query(
    `
          SELECT * 
          FROM boxes
          WHERE user_id = ?
          AND box_id = ?`,
    [userId, boxId]
  );
  if (checkIfExists.length === 0) {
    // Box not found, send error response
    // return res.status(200).json(checkIfExists);
    return res.status(404).json({ error: "Box not found" });
  }

  const [result] = await pool.query(
    `
    UPDATE boxes
    SET box_title = ?,
    box_description = ?,
    box_open = ?,
    box_public = ?
    WHERE box_id = ?
    `,
    [boxTitle, boxDescription, boxOpen, boxPublic, boxId]
  );

  res.status(200).json(result);
};

export { getUserBoxes, createBox, updateUserBox };
