const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");

router.post("/view", viewController.viewArticle);

module.exports = router;
