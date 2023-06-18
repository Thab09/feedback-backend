import pool from "../config/databaseConfig.js";

//GET user's boxes
const getUserBoxesService = async (userId) => {
  const [result] = await pool.query(
    `
    SELECT * 
    FROM boxes
    WHERE user_id = ?
    AND box_active = ?
    `,
    [userId, 1]
  );
  return result;
};

//POST create a box
const createBoxService = async (
  userId,
  userName,
  boxTitle,
  boxDescription,
  boxOpen,
  boxPublic
) => {
  const [result] = await pool.query(
    `
    INSERT INTO boxes 
    (user_id, user_name, box_title, box_description, box_open, box_public, box_active)
    VALUES (?,?,?,?,?,?,?)
    `,
    [userId, userName, boxTitle, boxDescription, boxOpen, boxPublic, 1]
  );
  return result;
};

//UPDATE user's box
const updateUserBoxService = async (
  boxId,
  boxTitle,
  boxDescription,
  boxOpen,
  boxPublic
) => {
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

  return result;
};

//DELETE user's box
const deleteUserBoxService = async (userId, boxId) => {
  const [result] = await pool.query(
    `
    UPDATE boxes
    SET box_title = ?,
    box_description = ?,
    box_open = ?,
    box_public = ?,
    box_active = ?
    WHERE user_id = ? 
    AND box_id = ?;
      `,
    ["Deleted Box", "Box has been deleted by the user.", 0, 0, 0, userId, boxId]
  );

  return result;
};

const checkIfBoxExists = async (userId, boxId) => {
  const [check] = await pool.query(
    `
    SELECT * 
    FROM boxes
    WHERE user_id = ?
    AND box_id = ?
    AND box_active = ?`,
    [userId, boxId, 1]
  );
  if (check.length === 0) return false;

  return true;
};

export {
  getUserBoxesService,
  createBoxService,
  updateUserBoxService,
  deleteUserBoxService,
  checkIfBoxExists,
};
