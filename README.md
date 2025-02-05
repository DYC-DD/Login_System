# Login_System

**Login_System** 是一個基於 **MongoDB、Express、React 和 Node.js**（MERN Stack）構建的登入系統，旨在提供安全且高效的用戶認證功能。該專案支援用戶註冊、登入、登出與身份驗證，適合作為學習與實踐 MERN 堆疊的入門專案。

---

## **功能特色**

### **用戶管理**

- **用戶註冊**：使用者可以透過表單創建帳號，並驗證輸入的電子郵件與密碼。
- **用戶登入/登出**：透過 JWT（JSON Web Token）進行身份驗證，確保用戶資訊安全。
- **密碼加密**：使用 **bcrypt** 進行密碼雜湊，確保儲存於資料庫中的密碼安全性。
- **身份驗證**：每次登入後，後端會產生 **JWT Token**，用戶可利用該 Token 進行 API 請求。
- **錯誤提示**：針對輸入錯誤（如密碼不匹配、必填欄位遺漏）顯示適當錯誤訊息。

### **前端技術（React）**

- **動態表單驗證**：使用 React 處理表單輸入，提供即時驗證功能。
- **狀態管理**：使用 React Hooks（useState、useEffect）管理用戶登入狀態。
- **API 串接**：透過 Axios 與後端 API 進行資料交換。
- **響應式設計**：結合 Bootstrap 或 Tailwind CSS 進行 UI 優化。

### **後端技術（Node.js + Express）**

- **RESTful API**：提供用戶註冊、登入、登出與用戶資訊 API。
- **身份驗證**：使用 JWT 進行 Token 驗證，保證 API 安全性。
- **MongoDB 整合**：透過 Mongoose 管理資料庫模型，實現高效數據操作。
- **CORS 支援**：允許前端與後端跨來源請求，確保前後端能夠順利溝通。

---

## **技術細節**

- **後端框架**：Node.js + Express
- **前端框架**：React.js + React Router
- **資料庫**：MongoDB（使用 Mongoose 進行 ODM 操作）
- **身份驗證**：JWT（JSON Web Token）
- **密碼加密**：bcrypt.js
- **API 請求**：Axios
- **部署**：可使用 **Heroku、Vercel 或 Netlify** 部署前後端應用程式

---

## **擴展功能與未來計劃**

- **密碼重設與找回**：整合電子郵件驗證，允許用戶重設或找回密碼。
- **OAuth 第三方登入**：支援 Google、Facebook 等社群平台登入。
- **個人資料管理**：提供用戶資訊編輯與頭像上傳功能。
- **角色與權限管理**：擴展管理員（Admin）與普通用戶（User）權限。
- **API 擴展**：使用 GraphQL 或擴展 RESTful API，支援更多業務需求。
- **前後端完全分離**：將 API 與前端獨立開發，適用於多種應用場景。
- **測試覆蓋**：加入單元測試與整合測試，確保系統穩定性。
- **性能優化**：透過 Redis 快取與 Load Balancer 提升系統效能。
- **安全性加強**：加入雙重驗證（2FA）與 CSRF 保護，進一步提升安全性。
