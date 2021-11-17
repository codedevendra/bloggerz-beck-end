const Blogger = require("../models/category");
const ImageSchema = require("../models/image");

exports.addCategory = async (req, res, next) => {
  await Blogger.create(req.body, (error, doc) => {
    if (!doc) {
      res.status(403).json({ error: "something went wrong !" });
    }
    res.status(201).json({ message: "Category added successfully!" });
  });
};

exports.addPhotos = async (req, res, next) => {
  let body = { url: "images/" + req.files["blog-image"][0].filename };
  await ImageSchema.create(body, (error, doc) => {
    if (doc) {
      res.status(201).json({ message: "file uploaded successfully !" });
    } else {
      res.status(403).json({ message: "something went wrong !" });
    }
  });
};
