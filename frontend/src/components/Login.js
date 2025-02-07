import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("登入成功！");
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response?.data?.msg || "登入失敗，請稍後再試！");
    }
  };

  return (
    <div>
      <h2>登入</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-container">
        <input
          className="input"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            className="input password-input"
            type={showPassword ? "text" : "password"}
            placeholder="密碼"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="show-password-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
        <button className="button" onClick={handleLogin}>
          &nbsp;登入&nbsp;
        </button>
        <p className="link">
          還沒有帳號嗎？{" "}
          <span onClick={toggleForm} className="toggle-link">
            點擊註冊
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
