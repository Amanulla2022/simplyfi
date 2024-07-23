const ArticleModel = require("../models/articleModel");

// Get all articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find().populate("author", "name");
    res.json(articles);
  } catch (err) {
    console.error("Error fetching articles:", err);
    res.status(500).json({ error: err.message });
  }
};

// Create a new article
const createArticle = async (req, res) => {
  try {
    const article = new ArticleModel(req.body);
    await article.save();
    const populatedArticle = await ArticleModel.findById(article._id).populate(
      "author",
      "name"
    );
    res.json(populatedArticle);
  } catch (err) {
    console.error("Error creating article:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllArticles, createArticle };
