import express from "express";
import { getUserBoxes, createBox } from "../controllers/userBoxControllers.js";

const router = express.Router();

//GET user's boxes
router.get("/:userid", getUserBoxes);

//POST create a box
router.post("/", createBox);

export default router;
