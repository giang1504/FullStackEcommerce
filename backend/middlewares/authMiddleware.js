const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  try {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      } else {
        throw new Error("Not Authorized token expired, Please Login again");
      }
    } else {
      throw new Error("There is no token attached to authMiddleware");
    }
  } catch (error) {
    next(error);
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });

  if (adminUser && adminUser.role === "admin") {
    next();
  } else {
    throw new Error("There is no token attached to the isAdmin");
  }
});

module.exports = { authMiddleware, isAdmin };
