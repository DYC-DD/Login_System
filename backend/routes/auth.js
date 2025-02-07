const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// 註冊 API
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ msg: "Please fill in all fields!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters long!" });
    }

    let userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ msg: "This email is already registered!" });

    let usernameExists = await User.findOne({ username });
    if (usernameExists)
      return res.status(400).json({ msg: "This username is already taken!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ msg: "Registration successful, please log in!" });
  } catch (error) {
    console.error("Registration error：", error.message);
    res.status(500).json({ msg: "Server error, please try again later!" });
  }
});

// 登入 API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist!" });

    // 密碼比對
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

    // 產生 JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, userId: user._id });
  } catch (error) {
    console.error("Login Error：", error.message);
    res.status(500).json({ msg: "Server error, please try again later!" });
  }
});

module.exports = router;
