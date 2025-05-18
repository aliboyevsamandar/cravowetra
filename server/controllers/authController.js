const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Static user object
  const user = {
    id: "admin-id",
    role: "admin",
  };

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "10y" });
  res.json({ token });
};
