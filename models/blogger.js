const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const bloggerSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  mobile: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
    },
  },
  password: {
    type: String,
  },
});

bloggerSchema.pre("save", async function (next) {
  let salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
});

bloggerSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

bloggerSchema.methods.getUserData = function () {
  token = jwt.sign(
    { id: this.id, userType: "blogger" },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
  return token;
};

module.exports = mongoose.model("blogger", bloggerSchema);
