const { User } = require("../models");

class SessionController {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const comparePassword = await user.checkPassword(password);
    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    return res.json({
      user,
      token: user.generateToken(),
    });
  }

  async dashboard(req, res) {
    return res.status(200).send();
  }
}

module.exports = new SessionController();
