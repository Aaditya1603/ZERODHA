const router = require("express").Router();
const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middleware/AuthMiddleware");

// 🔓 Public Routes (Anyone can access)
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

// 🔒 Protected Routes (Only logged-in users can access)
// You can use this endpoint on your dashboard to fetch portfolio details securely
router.get("/portfolio", userVerification, (req, res) => {
  res.json({
    status: true,
    message: `Welcome back ${req.user.username}`,
    portfolioData: [], // Add your real portfolio data here later
  });
});

module.exports = router;
