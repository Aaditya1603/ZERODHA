const User = require("../Models/UserModel");
const createSecretToken = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

// SIGNUP LOGIC
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);

    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res
      .status(201)
      .json({ message: "Signed up successfully", success: true, user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error during signup", success: false });
  }
};

// LOGIN LOGIC
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }
    const token = createSecretToken(user._id);

    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res.status(200).json({ message: "Logged in successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error during login", success: false });
  }
};

// LOGOUT LOGIC
module.exports.Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      path: "/",
      withCredentials: true,
      httpOnly: false,
    });
    return res
      .status(200)
      .json({ message: "Logged out successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error during logout", success: false });
  }
};
