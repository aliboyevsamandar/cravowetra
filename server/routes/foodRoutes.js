const express = require("express");
const router = express.Router();

// 👇 Controller importi (to‘g‘ri export qilingan bo‘lishi kerak)
const {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

// 👇 Middlewarelar (token va admin tekshiruvi)
const { verifyToken, verifyAdmin } = require("../middleware/auth");

// GET - barcha ovqatlar
router.get("/", getFoods);

// POST - faqat adminlar yangi ovqat qo‘shadi
router.post("/", verifyToken, verifyAdmin, createFood);

// PUT - ovqatni tahrirlash
router.put("/:id", verifyToken, verifyAdmin, updateFood);

// DELETE - ovqatni o‘chirish
router.delete("/:id", verifyToken, verifyAdmin, deleteFood);

module.exports = router;
