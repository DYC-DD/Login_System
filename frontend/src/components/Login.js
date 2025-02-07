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
      // 發送 POST 請求到後端 API 進行登入驗證
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      // alert("登入成功！"); // 跳出登入成功訊息視窗

      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err.response?.data?.msg || "Login failed, please try again later!"
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
            placeholder="Password"
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
          Login
        </button>
        <p className="link">
          Don't have an account yet ?{" "}
          <span onClick={toggleForm} className="toggle-link">
            Click to sign up.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
