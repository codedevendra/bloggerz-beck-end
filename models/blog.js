const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    default:true
  },
  sendPostToAllSubscriber: {
    type: Boolean,
    default:true
  },
  tags: {
    type: Array,
    required: true,
  },
  category:{ type: Schema.Types.ObjectId, ref: 'category' },
  mainImage: {
    type: String,
    required: true,
  },
});

module.exports =mongoose.model("blog",blogSchema);
