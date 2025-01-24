# dev

## 專案目錄架構圖

```
Login_System/
├── manage.py                # Django 的入口點，執行伺服器、遷移資料庫等命令
├── db.sqlite3               # SQLite 資料庫檔案（開發環境預設）
├── requirements.txt         # 記錄專案使用的 Python 套件
├── Login_System/            # 專案的主設定檔案夾
│   ├── __init__.py          # 標示此目錄為 Python 模組
│   ├── asgi.py              # 為 ASGI 應用程序提供入口（非同步支持）
│   ├── settings.py          # 全域設定檔，包含應用程式、資料庫、靜態檔案等設定
│   ├── urls.py              # 主路由設定，將請求分發到應用的子路由
│   ├── wsgi.py              # 為 WSGI 應用程序提供入口（部署用）
│   └── static/              # 存放靜態檔案（CSS、JavaScript、圖片等）
│       └── css/             # 自訂的 CSS 樣式檔案
│       └── js/              # 自訂的 JavaScript 檔案
├── accounts/                # 使用者認證應用的資料夾
│   ├── __init__.py          # 標示此目錄為 Python 模組
│   ├── admin.py             # 註冊模型到 Django 管理後台
│   ├── apps.py              # 定義應用程式的設定
│   ├── forms.py             # 定義表單（註冊與登入表單）
│   ├── models.py            # 定義使用者模型（可選擴展 Django 的 User 模型）
│   ├── tests.py             # 用於撰寫單元測試
│   ├── views.py             # 定義登入、註冊、登出等功能的視圖邏輯
│   ├── urls.py              # 子應用的路由設定
│   └── templates/           # 存放模板檔案
│       └── accounts/        # 與應用相關的模板
│           ├── register.html # 用戶註冊頁面模板
│           ├── login.html    # 用戶登入頁面模板
│           ├── logout.html   # 登出確認頁面模板
├── templates/               # 全域模板資料夾
│   └── base.html            # 主模板，定義基礎結構（如頁首、頁腳）
└── migrations/              # Django 的資料庫遷移檔案
    ├── __init__.py          # 標示此目錄為 Python 模組
    └── 0001_initial.py      # 初始資料庫結構的遷移檔案
```
