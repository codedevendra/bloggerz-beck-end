const jwt = require("jsonwebtoken");

exports.protectUser = async (req, res, next) => {
  let token;

  // console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    console.log(token);
  }

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
};
