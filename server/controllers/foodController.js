const Food = require("../models/Food");

// GET - barcha ovqatlar ro'yxati
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: "Ovqatlar olinmadi" });
  }
};

// POST - yangi ovqat qo'shish (faqat adminlar)
const createFood = async (req, res) => {
  try {
    const { name, price, description, category, image } = req.body;
    const food = new Food({ name, price, description, category, image });
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ error: "Ovqat yaratishda xatolik" });
  }
};

// PUT - ovqatni tahrirlash
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category, image } = req.body;

    const updated = await Food.findByIdAndUpdate(
      id,
      { name, price, description, category, image },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Ovqat topilmadi" });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Ovqatni yangilashda xatolik" });
  }
};

// DELETE - ovqatni o'chirish
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Food.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Ovqat topilmadi" });

    res.json({ message: "Ovqat o‘chirildi" });
  } catch (err) {
    res.status(400).json({ error: "Ovqatni o‘chirishda xatolik" });
  }
};

// 👇 MUHIM: TO‘G‘RI EKSPORT
module.exports = {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
};
