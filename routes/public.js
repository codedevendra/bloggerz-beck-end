const express = require("express");
const router = express.Router();
const public = require("../controller/public.controller");
router.get("/images", public.getPhotos);
router.get("/categories", public.getCategories);
module.exports = router;
