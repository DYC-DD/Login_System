import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Login.css";

const Register = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 新增確認密碼狀態
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (!username || !email || !password || !confirmPassword) {
      setError("請填寫所有欄位！");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("請輸入有效的 Email 格式");
      return;
    }

    if (password.length < 6) {
      setError("密碼長度至少 6 個字元");
      return;
    }

    if (password !== confirmPassword) {
      setError("密碼與確認密碼不一致！");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/register",
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccess(res.data.msg);
      setError("");

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => toggleForm(), 2000);
    } catch (err) {
      setError(err.response?.data?.msg || "註冊失敗，請稍後再試！");
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2>註冊</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <input
        className="input"
        type="text"
        placeholder="使用者名稱"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-container">
        <input
          className="input password-input"
          type={showPassword ? "text" : "password"}
          placeholder="密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>
      <div className="password-container">
        <input
          className="input password-input"
          type={showPassword ? "text" : "password"}
          placeholder="確認密碼"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="show-password-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁"}
        </button>
      </div>
      <button className="button" onClick={handleRegister}>
        註冊
      </button>

      <p className="link">
        已經有帳號？{" "}
        <span onClick={toggleForm} className="toggle-link">
          點擊登入
        </span>
      </p>
    </div>
  );
};

export default Register;
