# Login_System

**Login_System** 是一個用於練習用戶驗證功能的 Django 網站專案，專注於構建基本的用戶註冊、登入與登出系統。此專案採用 Django 框架開發後端邏輯，並結合模板引擎進行前端顯示，提供穩定且安全的用戶認證功能。

---

## 功能特色

### 用戶管理

- **用戶註冊**  
  使用者可以透過表單創建帳號，包括基本的用戶名、密碼與電子郵件。
- **用戶登入/登出**  
  實作登入與登出功能，使用 Django 內建的認證系統，確保安全性。
- **密碼驗證**  
  包含密碼強度檢查與密碼加密存儲。
- **錯誤提示**  
  針對表單錯誤（如密碼不匹配、必填欄位遺漏）顯示即時提示。

### 動態模板渲染

- **模板引擎**  
  使用 Django 的模板語言（Django Templating Language, DTL）設計動態頁面。
- **響應式表單顯示**  
  表單結構清晰，搭配 Bootstrap 等框架進行樣式優化。

---

## 擴展功能（未來計劃）

- **密碼重設與找回**  
  整合電子郵件功能，讓使用者重設或找回密碼。
- **多重驗證**  
  支援第三方登入（Google、Facebook 等）。
- **個人檔案管理**  
  提供用戶資料編輯、頭像上傳與詳細檔案展示功能。

---

## 技術細節

- **後端框架**：使用 Django 開發，用戶驗證系統基於內建的 `auth` 應用。
- **資料庫**：採用 SQLite 作為預設資料庫，可擴展為 MySQL 或 PostgreSQL。
- **用戶模型**：基於 Django 的 `AbstractUser` 擴展自定義字段。
- **前端技術**：使用 Django 模板語言，支援與 Bootstrap 結合的簡易前端設計。
- **部署**：可透過 Heroku 或本地伺服器快速部署。

---

## 未來計劃

- **API 支援**：使用 **Django Rest Framework (DRF)** 提供 RESTful API，支援與前端框架（如 React 或 Vue.js）整合。

- **測試覆蓋**：增加單元測試與整合測試，確保用戶驗證邏輯的正確性。

- **UI 改善**：加入更直觀的用戶界面設計，提升操作體驗。

- **安全強化**：實現雙重驗證（2FA），進一步提高帳號安全性。
