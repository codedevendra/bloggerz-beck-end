const mongoose = require("mongoose");

const category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("category", category);
