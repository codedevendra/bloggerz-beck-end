const mongoose = require("mongoose");

connectDB = async () => {
  const conn = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("db connected successfully");
};

module.exports = connectDB;
