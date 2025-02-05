const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://admin:admin@localhost:27017/";

// 連接 MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB 已連接"))
  .catch((err) => console.error("MongoDB 連接失敗", err));

// 設定路由
app.get("/", (req, res) => {
  res.send("API 運行中...");
});

// 載入 Auth 路由
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// 啟動伺服器
app.listen(PORT, () => console.log(`伺服器運行於 http://localhost:${PORT}`));
