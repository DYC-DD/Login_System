const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// 連接 MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB 已連接"))
  .catch((err) => console.error("MongoDB 連接失敗", err));

app.get("/", (req, res) => {
  res.send("API 運行中...");
});

app.listen(PORT, () => console.log(`伺服器運行於 http://localhost:${PORT}`));
