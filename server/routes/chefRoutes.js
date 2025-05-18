const express = require("express");
const router = express.Router();
const controller = require("../controllers/chefController");
const { verifyToken, verifyAdmin } = require("../middleware/auth");

// Foydalanuvchilar ro‘yxatni ko‘rishi mumkin
router.get("/", controller.getChefs);

// Adminlar faqat oshpaz yaratish, yangilash yoki o‘chirishni amalga oshira oladi
router.post("/", verifyToken, verifyAdmin, controller.createChef);
router.put("/:id", verifyToken, verifyAdmin, controller.updateChef);
router.delete("/:id", verifyToken, verifyAdmin, controller.deleteChef);

module.exports = router;
