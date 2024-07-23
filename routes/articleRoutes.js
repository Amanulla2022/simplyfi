const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleControllers");

router.get("/all", articleController.getAllArticles);
router.post("/create", articleController.createArticle);

module.exports = router;
