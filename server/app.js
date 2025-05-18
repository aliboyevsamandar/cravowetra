const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const foodRoutes = require("./routes/foodRoutes");
const chefRoutes = require("./routes/chefRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api/foods", foodRoutes);
app.use("/api/chefs", chefRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB bilan muvaffaqiyatli ulandi");
    app.listen(PORT, () => {
      console.log(`🚀 Server ishga tushdi: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB ulanishda xatolik:", err);
  });
