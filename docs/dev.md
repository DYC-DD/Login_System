# dev

## 專案目錄架構圖

```
Login_System/
├── backend/                   # 後端目錄（Node.js + Express）
│   ├── models/                # 存放 Mongoose Schema 模型
│   │   └── User.js            # 用戶數據模型（包含 username, email, password）
│   ├── routes/                # API 路由
│   │   └── auth.js            # 使用者身份驗證（登入、註冊 API）
│   ├── .env                   # 環境變數配置（如 MONGO_URI, JWT_SECRET）
│   ├── package-lock.json      # npm 依賴鎖定文件
│   ├── package.json           # 後端專案設定與依賴管理
│   └── server.js              # Express 伺服器主文件（啟動後端）
│
├── docs/                      # 文件與說明
│   ├── images/                # 存放專案截圖
│   │   ├── Login.png          # 登入畫面截圖
│   │   └── Register.png       # 註冊畫面截圖
│   └── dev.md                 # 開發說明文件（包含 API 說明）
│
├── frontend/                  # 前端目錄（React）
│   ├── public/                # 靜態資源（HTML、圖片等）
│   │   ├── images/            # 存放 UI 相關圖片
│   │   └── index.html         # React 項目入口 HTML
│   ├── src/                   # 主要前端程式碼
│   │   ├── components/        # React UI 元件
│   │   │   ├── Bubbles.js     # 登入/註冊 UI，包含動態背景效果
│   │   │   ├── Dashboard.js   # 受保護頁面，登入後可訪問
│   │   │   ├── Login.js       # 使用者登入元件
│   │   │   └── Register.js    # 使用者註冊元件
│   │   ├── styles/            # CSS 樣式
│   │   │   ├── Bubbles.css    # Bubbles 動畫與背景樣式
│   │   │   ├── Dashboard.css  # Dashboard 頁面樣式
│   │   │   └── Login.css      # Login & Register 樣式
│   │   ├── App.js             # React 應用程式主文件（定義路由）
│   │   └── index.js           # React 入口文件（渲染 App.js）
│   ├── package-lock.json      # npm 依賴鎖定文件
│   └── package.json           # 前端專案設定與依賴管理
│
├── .gitignore                 # Git 忽略文件（排除 node_modules、環境變數等）
├── LICENSE                    # 專案授權文件
└── README.md                  # 專案介紹與使用說明

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
