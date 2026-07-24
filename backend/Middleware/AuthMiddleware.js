require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedData) => {
    if (err) {
      return res
        .status(403)
        .json({ status: false, message: "Invalid or expired token." });
    }

    try {
      const user = await User.findById(decodedData.id).select("-password");

      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User not found." });
      }

      req.user = user;

      next();
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal server error during verification.",
      });
    }
  });
};
