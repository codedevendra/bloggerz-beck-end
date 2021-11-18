const express = require("express");
const router = express.Router();
const public = require("../controller/public.controller");
router.get("/images", public.getPhotos);
router.get("/categories", public.getCategories);
router.get("/category/:id", public.getCategory);
router.get("/blogs", public.getBlogs);
router.get("/blog/:id", public.getBlog);
module.exports = router;
