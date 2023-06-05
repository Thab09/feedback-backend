import {
  getUserBoxesService,
  createBoxService,
  updateUserBoxService,
  deleteUserBoxService,
  checkIfExists,
} from "../services/userBox.service.js";

//GET user's boxes
const getUserBoxes = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await getUserBoxesService(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

//POST create a box
const createBox = async (req, res) => {
  try {
    const { userId, userName, boxTitle, boxDescription, boxOpen, boxPublic } =
      req.body;
    const result = await createBoxService(
      userId,
      userName,
      boxTitle,
      boxDescription,
      boxOpen,
      boxPublic
    );
    return res.status(200).json(result.insertId);
  } catch (error) {
    res.status(404).json(error);
  }
};

//UPDATE user's box
const updateUserBox = async (req, res) => {
  try {
    const { userId, boxId, boxTitle, boxDescription, boxOpen, boxPublic } =
      req.body;

    const check = await checkIfExists(userId, boxId);
    if (!check) {
      return res.status(404).json({ error: "Box not found" });
    }
    const result = await updateUserBoxService(
      boxId,
      boxTitle,
      boxDescription,
      boxOpen,
      boxPublic
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

//DELETE user's box
const deleteUserBox = async (req, res) => {
  try {
    const userId = req.query.userId;
    const boxId = req.query.boxId;

    const check = await checkIfExists(userId, boxId);
    if (!check) {
      return res.status(404).json({ error: "Box not found" });
    }

    const result = await deleteUserBoxService(userId, boxId);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

export { getUserBoxes, createBox, updateUserBox, deleteUserBox };
