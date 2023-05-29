import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// create the connection to database
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export const getBoxes = async () => {
  const [result] = await pool.query("SELECT * FROM boxes");
  return result;
};

export const getBox = async (id) => {
  const [result] = await pool.query(
    `
  SELECT * 
  FROM boxes 
  WHERE box_id = ?
  `,
    [id]
  );
  return result[0];
};

// remove the userID and username when doing the actual app/auth
export const createBox = async (
  userID,
  username,
  boxTitle,
  boxDescription,
  boxOpen,
  boxPublic
) => {
  const [result] = await pool.query(
    `INSERT INTO boxes (user_id, user_name, box_title, box_description, box_open, box_public)
    VALUES (?,?,?,?,?,?)`,
    [userID, username, boxTitle, boxDescription, boxOpen, boxPublic]
  );
  return getBox(result.insertId);
};

// console.log(await createBox(2327, "Ibraheem", "test#4", "test#4", false, true));
