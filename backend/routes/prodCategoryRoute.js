const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCategory,
  updateCategory,
  getProdCategory,
  getAllProdCategory,
  deleteProdCategory,
} = require("../controller/prodCategoryCtrl");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteProdCategory);
router.get("/:id", getProdCategory);
router.get("/", getAllProdCategory);

module.exports = router;
