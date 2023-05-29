import pool from "../config/databaseConfig.js";

// GET all boxes
const getBoxes = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM boxes");
  res.status(200).json(result);
};

//GET a specific box
const getBox = async (req, res) => {
  const { boxId } = req.params;
  const [result] = await pool.query(
    `
    SELECT * 
    FROM boxes 
    WHERE box_id = ?
    `,
    [boxId]
  );
  res.status(200).json(result);
};

export { getBoxes, getBox };
