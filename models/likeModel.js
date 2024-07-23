const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  },
  { timestamps: true }
);

// Add a unique index to ensure a user can only like an article once
likeSchema.index({ user: 1, article: 1 }, { unique: true });

module.exports = mongoose.model("Like", likeSchema);
