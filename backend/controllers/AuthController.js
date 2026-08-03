const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("BACKEND SIGNUP RECEIVED BODY:", req.body);

    const { email, password, username, createdAt } = req.body;

    if (!email || !password || !username) {
      console.log("CRITICAL ERROR: Missing fields in backend validation!");
      return res
        .status(400)
        .json({ message: "All fields are required fields", success: false });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("CRITICAL ERROR: Email already exists in DB:", email);
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });

    console.log("SIGNUP SUCCESS: User created successfully!");
    return res
      .status(201)
      .json({ message: "Signed up successfully", success: true, user });
  } catch (error) {
    console.error("DETAILED SIGNUP SYSTEM CRASH ERROR:", error);
    return res.status(500).json({
      message: "Internal server error during registration",
      success: false,
      error: error.message,
    });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    console.log("BACKEND LOGIN RECEIVED BODY:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("LOGIN FAIL: User not found in database:", email);
      return res
        .status(401)
        .json({ message: "Incorrect password or email", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      console.log("LOGIN FAIL: Password verification failed for:", email);
      return res
        .status(401)
        .json({ message: "Incorrect password or email", success: false });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });

    console.log("LOGIN SUCCESS: User authenticated successfully!");
    return res
      .status(200)
      .json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error("DETAILED LOGIN SYSTEM CRASH ERROR:", error);
    return res.status(500).json({
      message: "Internal server error during login",
      success: false,
      error: error.message,
    });
  }
};
