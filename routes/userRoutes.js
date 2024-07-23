const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/all", userController.getAllUsers);
router.post("/create", userController.createUser);

module.exports = router;
