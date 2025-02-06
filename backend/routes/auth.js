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
      return res.status(400).json({ msg: "請填寫所有欄位！" });
    }

    if (password.length < 6) {
      return res.status(400).json({ msg: "密碼長度至少 6 個字元" });
    }

    let userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: "此 Email 已被註冊" });

    let usernameExists = await User.findOne({ username });
    if (usernameExists)
      return res.status(400).json({ msg: "此使用者名稱已被使用" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ msg: "註冊成功，請登入！" });
  } catch (error) {
    console.error("註冊錯誤：", error.message);
    res.status(500).json({ msg: "伺服器錯誤，請稍後再試！" });
  }
});

// 登入 API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "用戶不存在" });

    // 密碼比對
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "密碼錯誤" });

    // 產生 JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, userId: user._id });
  } catch (error) {
    console.error("登入錯誤：", error.message);
    res.status(500).json({ msg: "伺服器錯誤，請稍後再試！" });
  }
});

module.exports = router;
