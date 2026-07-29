const User = require("../Models/UserModel");
const createSecretToken = require("../Util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // Added Production Cookie Settings for Render
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none", // Must be "none" if frontend and backend have different domains on Render
      secure: true, // Must be true for sameSite: "none" to work over HTTPS on Render
      path: "/",
    });

    // Send success response and return immediately
    return res.status(201).json({
      message: "Signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Signup error caught:", error);

    // CRITICAL: This stops the frontend from hanging when an error occurs
    return res.status(500).json({
      message: "Internal server error during registration",
      success: false,
      error: error.message,
    });
  }
};

const bcrypt = require("bcrypt"); // Ensure bcrypt is explicitly required at the top

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect password or email", success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(401)
        .json({ message: "Incorrect password or email", success: false });
    }

    const token = createSecretToken(user._id);

    // FIXED: Production-ready cookie configuration for cross-domain Render deployments
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none", // Required because frontend and backend use different domains
      secure: true, // Required when sameSite is set to "none" over HTTPS
      path: "/",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login error caught:", error);

    // CRITICAL: Prevents your frontend from hanging as pending during an internal crash
    return res.status(500).json({
      message: "Internal server error during login",
      success: false,
      error: error.message,
    });
  }
};

module.exports.Logout = async (req, res) => {
  // FIXED: Clearing the cookie must match the exact same domain settings to delete successfully
  res.clearCookie("token", {
    path: "/",
    sameSite: "none",
    secure: true,
  });
  return res
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
};
