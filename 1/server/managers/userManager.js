const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (userData) => {
  try {
    const hash = await bcrypt.hash(userData.password, 10);
    userData.password = hash
    const user = await User.create(userData);

    const result = getAuthResult(user);

    return result;
  } catch (error) {
    alert("User already exists!");
    throw new Error("User already exists!");
  }
};

exports.login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid username ");
    }

    console.log(password, 'password');
    console.log(user.password, 'user.password');
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid  password");
    }

    const result = getAuthResult(user);

    return result;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

exports.getUser = async (userId) => User.findById(userId); 
exports.updateUser = async(userId, userData) => User.findByIdAndUpdate(userId, userData);








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
