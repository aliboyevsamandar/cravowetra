const jwt = require("jsonwebtoken");

// Middleware: tokenni tekshiradi
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token topilmadi" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token topilmadi" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // foydalanuvchi ma'lumotlarini qo'shamiz
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Token noto‘g‘ri yoki muddati o‘tgan" });
  }
}

// Middleware: admin rolini tekshiradi
function verifyAdmin(req, res, next) {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Foydalanuvchi admin emas" });
  }
}

// Login endpoint
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123456") {
    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "10y" }
    );
    return res.json({ token });
  }

  return res.status(401).json({ message: "Noto‘g‘ri login yoki parol" });
});

module.exports = {
  router,
  verifyToken,
  verifyAdmin,
};
