const LikeModel = require("../models/likeModel");
const ArticleModel = require("../models/articleModel");
const NotificationModel = require("../models/notificationModel");

// like an article and also notify to user
const likeArticle = async (req, res) => {
  try {
    const { articleId, userId } = req.body;

    // Validate input
    if (!articleId || !userId) {
      return res
        .status(400)
        .json({ message: "Article ID and User ID are required" });
    }

    // Check if the like already exists
    const existingLike = await LikeModel.findOne({
      article: articleId,
      user: userId,
    });
    if (existingLike) {
      return res
        .status(400)
        .json({ message: "Article already liked by this user" });
    }

    // Create a new like
    await new LikeModel({ article: articleId, user: userId }).save();

    // Increment like count for the article
    await ArticleModel.findByIdAndUpdate(articleId, { $inc: { likes: 1 } });

    // Create notification
    const article = await ArticleModel.findById(articleId).populate("author");
    if (article.author._id.toString() !== userId) {
      await new NotificationModel({
        user: article.author._id,
        article: articleId,
        message: `Your article "${article.title}" has been liked!`,
      }).save();
    }

    res.json({ message: "Article liked" });
  } catch (err) {
    console.error("Error liking article:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { likeArticle };
