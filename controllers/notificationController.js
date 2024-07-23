const NotificationModel = require("../models/notificationModel");

// get notify by user id
const getNotify = async (req, res) => {
  try {
    const notifications = await NotificationModel.find({
      user: req.params.userId,
    });
    res.json(notifications);
  } catch (err) {
    console.error("Error fetching notifications:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getNotify };
