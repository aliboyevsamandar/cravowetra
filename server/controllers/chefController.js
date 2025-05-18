const Chef = require("../models/Chef");

exports.getChefs = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createChef = async (req, res) => {
  try {
    const { name, age, image } = req.body;
    const chef = new Chef({ name, image, age });
    await chef.save();
    res.json(chef);
  } catch (error) {
    console.error("Create Chef error:", error); // <-- bu qatorda xatoni ko‘rsatamiz
    res.status(500).json({ message: error.message });
  }
};

exports.updateChef = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, image } = req.body; // age maydonini ham o'zgartiramiz

    // Ob'ektni yangilash
    const updated = await Chef.findByIdAndUpdate(
      id,
      { name, age, image }, // age ham qo'shildi
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteChef = async (req, res) => {
  try {
    const { id } = req.params;
    await Chef.findByIdAndDelete(id);
    res.json({ message: "Chef deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
