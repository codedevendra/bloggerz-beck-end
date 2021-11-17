const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },

  showRightColumn: {
    type: Boolean,
    required: true,
  },
  addToSlider: {
    type: Boolean,
    required: true,
  },
  sendPostToAllRegistered: {
    type: Boolean,
    required: true,
  },
  sendPostToAllSubscriber: {
    type: Boolean,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
});
