const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("Chef", chefSchema);
