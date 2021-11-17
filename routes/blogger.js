const express = require("express");
const { protectUser } = require("../middleware/authGuard");
const blogger = require("../controller/blogger.controller");
const router = express.Router();
const multer = require("multer");
const path = require("path");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: "blog-image", maxCount: 1 }]);
router.post("/category", protectUser, blogger.addCategory);
router.post("/image", protectUser, cpUpload, blogger.addPhotos);
module.exports = router;
