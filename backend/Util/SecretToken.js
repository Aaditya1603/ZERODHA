require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "3d", // Token lasts for 3 days
  });
};
