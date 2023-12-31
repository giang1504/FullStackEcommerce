const proCategory = require("../models/prodCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../untils/validateMongodbId");

const createCategory = asyncHandler(async (req, res) => {
  try {
    const createCategory = await proCategory.create(req.body);
    res.json(createCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateCategory = await proCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ updateCategory });
  } catch (error) {
    throw new Error(error);
  }
});
const getProdCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getProdCategory = await proCategory.findById(id);
    res.json({ getProdCategory });
  } catch (error) {
    throw new Error(error);
  }
});
const getAllProdCategory = asyncHandler(async (req, res) => {
  try {
    const getAllProdCategory = await proCategory.find();
    res.json(getAllProdCategory);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteProdCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProdCategory = await proCategory.findByIdAndDelete(id);
    res.json({ deleteProdCategory });
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createCategory,
  updateCategory,
  getProdCategory,
  getAllProdCategory,
  deleteProdCategory,
};
