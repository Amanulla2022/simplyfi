const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/notificationController");

// Get all notifications for a user
router.get("/:userId", NotificationController.getNotify);

module.exports = router;
