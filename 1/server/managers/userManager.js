const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
  
  try {
    const user = await User.create(userData);

  const result = getAuthResult(user);

  return result;
  } catch (error) {
    alert('User already exists!')
    throw new Error ('User already exists!')
  }
};

exports.login = async ({ email, password }) => {
  
  try {
    const user = await User.findOne({ email })

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isValid = await bcrypt.compare(password, user.password);


  if (!isValid) {
    throw new Error("Invalid username or password");
  }

  const result = getAuthResult(user);

  return result;
  } catch (error) {
    console.log(error.message);
    return error.message
  }
};

function getAuthResult(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, "SECRETSECRET", { expiresIn: "2d" });

  const result = {
    _id: user._id,
    email: user.email,
    accessToken: token,
  };

  return result;
}