import express from "express";
import {
  getUserBoxes,
  createBox,
  updateUserBox,
} from "../controllers/userBoxControllers.js";

const router = express.Router();

//GET user's boxes
router.get("/:userid", getUserBoxes);

//POST create a box
router.post("/", createBox);

//UPDATE user's box
router.put("/", updateUserBox);

export default router;
