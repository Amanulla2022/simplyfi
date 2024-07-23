const ViewModel = require("../models/viewModel");
const ArticleModel = require("../models/articleModel");

// view the article
const viewArticle = async (req, res) => {
  try {
    const { articleId, userId } = req.body;

    // Check if the view already exists
    const existingView = await ViewModel.findOne({
      article: articleId,
      user: userId,
    });

    if (!existingView) {
      // Create a new view
      await new ViewModel({ article: articleId, user: userId }).save();

      // Increment view count for the article
      await ArticleModel.findByIdAndUpdate(articleId, { $inc: { views: 1 } });
    }

    res.json({ message: "Article viewed" });
  } catch (err) {
    console.error("Error viewing article:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { viewArticle };
