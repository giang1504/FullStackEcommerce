var jwt = require("jsonwebtoken");

const generateRefeshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

module.exports = { generateRefeshToken };
