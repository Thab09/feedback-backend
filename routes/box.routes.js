import express from "express";
import {
  getBoxes,
  getPublicBoxes,
  getBox,
} from "../controllers/box.controller.js";

const router = express.Router();

//GET all boxes
router.get("/", getBoxes);

//GET all public boxes
router.get("/public", getPublicBoxes);

//GET one box
router.get("/:boxId", getBox);

export default router;
