import {
  getBoxesService,
  getPublicBoxesService,
  getBoxService,
} from "../services/box.service.js";

// GET all boxes
const getBoxes = async (req, res) => {
  try {
    const result = await getBoxesService();
    if (result.length === 0) {
      return res.status(204).json("There are no boxes.");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//GET public boxes
const getPublicBoxes = async (req, res) => {
  try {
    const result = await getPublicBoxesService();
    if (result.length === 0) {
      return res.status(204).json("There are no public boxes.");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

//GET a specific box
const getBox = async (req, res) => {
  try {
    const { boxId } = req.params;
    const result = await getBoxService(boxId);
    if (result.length === 0) {
      return res.status(204).json("Box not found.");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getBoxes, getPublicBoxes, getBox };
