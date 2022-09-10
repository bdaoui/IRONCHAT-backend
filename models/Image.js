const mongoose = require('mongoose');

constImageSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    tags: String,
    likes: [],
    comments: []
  },
  {
    timestamps: true
  }
);

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image
