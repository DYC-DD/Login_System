# dev

## 專案目錄架構圖

```
Login_System/
├── backend/                     # 後端（Node.js + Express + MongoDB）
│   ├── models/                  # 資料庫模型
│   │   ├── User.js              # 使用者模型
│   ├── routes/                  # API 路由
│   │   ├── auth.js              # 用戶認證 API（註冊/登入）
│   ├── config/                  # 設定檔
│   │   ├── db.js                # MongoDB 連接設定
│   ├── middleware/              # 中介層
│   │   ├── authMiddleware.js    # JWT 身份驗證中介
│   ├── .env                     # 環境變數（儲存密碼 & API 金鑰）
│   ├── server.js                # Express 伺服器主程式
│   ├── package.json             # Node.js 依賴與專案資訊
│   ├── package-lock.json        # 鎖定版本的依賴
│   └── nodemon.json             # 自動重啟伺服器的設定
│
├── frontend/                    # 前端（React.js）
│   ├── public/                  # 靜態資源
│   ├── src/                     # React 源碼
│   │   ├── components/          # UI 元件
│   │   │   ├── Login.js         # 登入表單元件
│   │   │   ├── Register.js      # 註冊表單元件
│   │   │   ├── Dashboard.js     # 用戶儀表板
│   │   ├── pages/               # 頁面組件
│   │   │   ├── Home.js          # 首頁
│   │   │   ├── Profile.js       # 個人資料頁面
│   │   ├── context/             # 全域狀態管理
│   │   │   ├── AuthContext.js   # 用戶身份管理（Context API）
│   │   ├── services/            # API 請求
│   │   │   ├── authService.js   # 處理登入 & 註冊的 API
│   │   ├── App.js               # React 主程式
│   │   ├── index.js             # React 入口
│   ├── .env                     # 環境變數（前端 API 路徑）
│   ├── package.json             # React 依賴與專案資訊
│   ├── package-lock.json        # 鎖定版本的依賴
│   └── README.md                # 前端專案說明文件
│
├── README.md                    # 專案總體說明
├── .gitignore                   # Git 忽略清單（排除 .env、node_modules）
└── docker-compose.yml           # Docker 部署設定（可選）
```

---

## backend

**安裝依賴**：

`npm install express mongoose dotenv jsonwebtoken bcryptjs cors`  
`npm install nodemon --save-dev`
| 依賴 | 作用 |
|----------------|-------------------------|
| **express** | 建立 HTTP 伺服器 |
| **mongoose** | 操作 MongoDB 資料庫 |
| **dotenv** | 管理環境變數 |
| **jsonwebtoken (JWT)** | Token 身份驗證 |
| **bcryptjs** | 密碼加密 |
| **cors** | 允許跨域請求 |
| **nodemon** | 開發時自動重啟伺服器 |

## frontend

---
