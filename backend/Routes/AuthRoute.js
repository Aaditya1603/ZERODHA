const router = require("express").Router();
const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middleware/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

router.get("/portfolio", userVerification, (req, res) => {
  res.json({
    status: true,
    message: `Welcome back ${req.user.username}`,
    portfolioData: [],
  });
});

module.exports = router;
