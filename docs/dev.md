# dev

## 專案目錄架構圖

```
Login_System/
├── manage.py                   # Django 管理命令入口
├── db.sqlite3                  # 預設資料庫（SQLite）
├── requirements.txt            # 所需套件清單
├── README.md                   # 專案說明文件
├── Django_Login_System/        # 專案設定資料夾
│   ├── __init__.py
│   ├── asgi.py                 # ASGI 入口（非同步支援）
│   ├── settings.py             # 全域設定檔
│   ├── urls.py                 # URL 路由設定
│   ├── wsgi.py                 # WSGI 入口（同步支援）
│   └── __pycache__/            # 編譯後的快取檔案
├── accounts/                   # 用戶認證應用程式
│   ├── migrations/             # 資料庫遷移檔案
│   │   ├── __init__.py
│   ├── templates/              # 前端模板
│   │   └── accounts/
│   │       ├── login.html      # 登入頁面模板
│   │       ├── register.html   # 註冊頁面模板
│   │       └── logout.html     # 登出頁面模板
│   ├── __init__.py
│   ├── admin.py                # 管理後台設定
│   ├── apps.py                 # 應用設定
│   ├── forms.py                # 表單定義
│   ├── models.py               # 資料模型
│   ├── tests.py                # 測試檔案
│   ├── urls.py                 # 應用程式的 URL 設定
│   └── views.py                # 視圖邏輯
└── static/                     # 靜態檔案（CSS、JS、圖片等）
    ├── css/
    │   └── styles.css          # 頁面樣式
    ├── js/
    │   └── scripts.js          # 自訂 JavaScript
    └── images/
        └── logo.png            # 項目 Logo 或其他圖片
```
