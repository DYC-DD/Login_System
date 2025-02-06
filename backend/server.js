const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // 允許前端的來源
    methods: ["GET", "POST"], // 允許的 HTTP 方法
    credentials: true, // 是否允許攜帶憑據
  })
);
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5001;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://admin:admin@localhost:27017/mernDB?authSource=admin";

// 檢查環境變數
if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET 未設定！");
  process.exit(1);
}

// 連接 MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB 連接成功"))
  .catch((err) => console.error("MongoDB 連接失敗", err));

app.get("/", (req, res) => {
  res.send("API 運行中...");
});

// 載入 Auth 路由
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// 全域錯誤處理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "伺服器內部錯誤" });
});

app.listen(PORT, () => console.log(`伺服器運行於 http://localhost:${PORT}`));
