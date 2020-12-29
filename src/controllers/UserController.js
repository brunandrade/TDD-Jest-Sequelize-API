const { User } = require("../models");
const Validator = require("../services/Validators");

class UserController {
  async register(req, res) {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ where: { email } });

    if (!Validator.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    } else if (userEmail) {
      return res.status(401).json({ message: "This email is already in use." });
    }

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });

    return res.status(200).json({
      message: "User registration done with success!",
      user: user,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { id } });
    const userEmail = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (email != user.email && userEmail) {
      return res.status(401).json({ message: "This email is already in use." });
    } else if (!Validator.isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    await User.update(
      {
        name: name,
        email: email,
        password: password,
      },
      { where: { id } }
    );

    return res.status(200).json({
      message: "User updated with success!",
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    await user.destroy();

    return res.status(200).json({
      message: "User deleted with success!",
    });
  }

  async index(req, res) {
    const user = await User.findAll({
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
    });

    if (user.lenght === 0) {
      return res.status(400).json({ message: "No user was found." });
    }

    return res.status(200).json({
      user,
    });
  }
}

module.exports = new UserController();
