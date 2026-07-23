require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

module.exports.userVerification = (req, res, next) => {
  // 1. Extract token from incoming request cookies
  const token = req.cookies.token;

  // 2. If no token is found, deny access immediately
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "Access denied. No token provided." });
  }

  // 3. Verify the token using your secret key
  jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedData) => {
    if (err) {
      return res
        .status(403)
        .json({ status: false, message: "Invalid or expired token." });
    }

    try {
      // 4. Fetch the user details using the ID stored inside the token payload
      const user = await User.findById(decodedData.id).select("-password"); // Exclude password hash for safety

      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User not found." });
      }

      // 5. Attach user details to the request object so next controllers can use it
      req.user = user;

      // 6. Move to the next middleware or route controller logic
      next();
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Internal server error during verification.",
      });
    }
  });
};
