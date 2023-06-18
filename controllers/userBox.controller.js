import {
  getUserBoxesService,
  createBoxService,
  updateUserBoxService,
  deleteUserBoxService,
  checkIfBoxExists,
} from "../services/userBox.service.js";

import {
  validateUserId,
  validateBoxCreation,
  validateBoxUpdation,
  validateBoxDeletion,
} from "../validations/userBox.validator.js";

//GET user's boxes
const getUserBoxes = async (req, res) => {
  try {
    const { error } = validateUserId.validate(req.params);

    if (error) {
      return res.status(404).send(error.details);
    }

    const { userId } = req.params;

    const result = await getUserBoxesService(userId);

    if (result.length === 0) {
      res.status(204).json({ message: "You currently have no boxes." });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

//POST create a box
const createBox = async (req, res) => {
  try {
    const { error } = validateBoxCreation.validate(req.body);
    if (error) {
      return res.status(404).send(error.details);
    }

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

    return res.status(201).json(result.insertId);
  } catch (error) {
    res.status(404).json(error);
  }
};

//UPDATE user's box
const updateUserBox = async (req, res) => {
  try {
    const { error } = validateBoxUpdation.validate(req.body);
    if (error) {
      return res.status(404).send(error.details);
    }

    const { userId, boxId, boxTitle, boxDescription, boxOpen, boxPublic } =
      req.body;

    const check = await checkIfBoxExists(userId, boxId);
    if (!check) {
      return res.status(204).json({ error: "Box not found" });
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
//localhost:8080/api/users/boxes/delete?userId=2327&boxId=14
const deleteUserBox = async (req, res) => {
  try {
    const { error } = validateBoxDeletion.validate(req.query);
    if (error) {
      return res.status(404).send(error.details);
    }

    const userId = req.query.userId;
    const boxId = req.query.boxId;

    const check = await checkIfBoxExists(userId, boxId);
    if (!check) {
      return res.status(204).json({ error: "Box not found" });
    }

    const result = await deleteUserBoxService(userId, boxId);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

export { getUserBoxes, createBox, updateUserBox, deleteUserBox };
