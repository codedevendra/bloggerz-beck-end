const ImageSchema = require("../models/image");
const categorySchema = require("../models/category");
exports.getPhotos = async (req, res, next) => {
  ImageSchema.find({}, (err, doc) => {
    if (doc) {
      res.json({ images: doc });
    } else {
      res.status(403).json({ images: [] });
    }
  });
};

exports.getCategories = async (req, res, next) => {
  await categorySchema.find({}, (err, doc) => {
    if (doc) {
      res.status(200).json({ categories: doc });
    } else {
      res.status(403).json({ error: "data not found" });
    }
  });
};
