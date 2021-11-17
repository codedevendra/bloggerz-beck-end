const Blogger = require("../models/blogger");
const asyncHandler = require("../middleware/async");
exports.bloggerRegister = asyncHandler(async (req, res, next) => {
  await Blogger.create(req.body, (error, doc) => {
    if (!error) {
      res.json({ message: "user created successfully!" });
    } else {
      res.status(409).json({ error: "user already exist" });
    }
  });
});

exports.bloggerLogin = async (req, res, next) => {
  const body = req.body;

  if (!body.email || !body.password) {
    res.status(401).json({ message: "Please provide email and password !" });
  }

  user = await Blogger.findOne({ email: body.email });
  
  if (!user) {
    res.status(401).json({ message: "Invalid credentials !" });
    return;
  }

  isMatch = await user.matchPassword(body.password);

  if (isMatch) {
    res.status(200).json({ token: user.getUserData(), user });
  } else {
    res.status(401).json({ message: "Invalid credentials !" });
  }
};
