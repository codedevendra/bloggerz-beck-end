const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
router.post("/register", authController.bloggerRegister);
router.post("/login", authController.bloggerLogin);
module.exports = router;
