import express from "express";
import {
  getUserBoxes,
  createBox,
  updateUserBox,
  deleteUserBox,
} from "../controllers/userBox.controller.js";

const router = express.Router();

//GET user's boxes
router.get("/:userId", getUserBoxes);

//POST create a box
router.post("/", createBox);

//UPDATE user's box
router.put("/", updateUserBox);

//DELETE user's box
router.put("/delete", deleteUserBox);

export default router;
