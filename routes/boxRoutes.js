import express from "express";
import { getBoxes, getBox } from "../controllers/boxControllers.js";

const router = express.Router();

//GET all boxes
router.get("/", getBoxes);

//GET one box
router.get("/:boxId", getBox);

export default router;
