const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../untils/validateMongodbId");

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json({ newCoupon });
  } catch (error) {
    throw new Error(error);
  }
});
const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const getAllCoupon = await Coupon.find();
    res.json(getAllCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ updateCoupon });
  } catch (error) {
    throw new Error(error);
  }
});
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json({ deleteCoupon });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createCoupon, getAllCoupon, updateCoupon, deleteCoupon };
