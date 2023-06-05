import pool from "../config/databaseConfig.js";

const getBoxesService = async () => {
  const [result] = await pool.query(`SELECT * FROM boxes`);
  return result;
};

const getPublicBoxesService = async () => {
  const [result] = await pool.query(`
  SELECT * 
  FROM boxes
  WHERE box_public = 1
  `);
  return result;
};

//GET a specific box
const getBoxService = async (boxId) => {
  const [result] = await pool.query(
    `
    SELECT * 
    FROM boxes 
    WHERE box_id = ?
    `,
    [boxId]
  );
  return result;
};

export { getBoxesService, getPublicBoxesService, getBoxService };
