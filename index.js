const express = require("express");
const bloggerAuth = require("./routes/auth.route");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const logger = require("morgan");
const { protectUser } = require("./middleware/authGuard");
const blogger = require("./routes/blogger");
const public = require("./routes/public");
var path = require("path");
const cors =require("cors");

dotenv.config({ path: "./config/config.env" });
connectDB();
app.use(express.json());
app.use(logger("dev"));
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/auth/blogger", bloggerAuth);
app.use("/blogger", blogger);
app.use("", public);
app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
