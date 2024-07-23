const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeControllers");

router.post("/like", likeController.likeArticle);

module.exports = router;
