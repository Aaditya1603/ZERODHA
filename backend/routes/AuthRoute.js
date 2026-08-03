const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");

router.post("/signup", AuthController.Signup);
router.post("/login", AuthController.Login);
router.post("/verify", userVerification);

router.get("/profile", userVerification, AuthController.getProfile);

module.exports = router;
