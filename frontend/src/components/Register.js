import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // **防止已登入用戶訪問註冊頁面**
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (!username || !email || !password) {
      setError("請填寫所有欄位！");
      return;
    }

    // **Email & 密碼格式驗證**
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("請輸入有效的 Email 格式");
      return;
    }

    if (password.length < 6) {
      setError("密碼長度至少 6 個字元");
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

      // **清除輸入框**
      setUsername("");
      setEmail("");
      setPassword("");

      // **2 秒後自動跳轉到登入頁面**
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      const errorMsg =
        err.response?.data?.msg || err.message || "註冊失敗，請稍後再試！";
      setError(errorMsg);
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
      <input
        className="input"
        type="password"
        placeholder="密碼"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleRegister}>
        註冊
      </button>

      <p className="link">
        已經有帳號？ <Link to="/">點擊登入</Link>
      </p>
    </div>
  );
};

export default Register;
