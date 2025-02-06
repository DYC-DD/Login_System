import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("登入成功！");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "登入失敗，請稍後再試！");
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
        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          &nbsp;Login&nbsp;
        </button>
        <p className="link">
          還沒有帳號嗎？ <Link to="/register">點擊註冊</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
