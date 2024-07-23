const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: String,
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
});

module.exports = mongoose.model("Article", articleSchema);
