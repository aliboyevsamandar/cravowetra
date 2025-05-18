const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, // bu yerda to‘liq rasm URL saqlanadi
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner"],
    required: true,
  },
});

module.exports = mongoose.model("Food", foodSchema);
