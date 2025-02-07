import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Login.css";

const Register = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

    // 驗證欄位是否填寫完整
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields!");
      return;
    }

    // 驗證 Email 格式
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email format!");
      return;
    }

    // 驗證密碼長度
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // 驗證密碼格式：必須包含大寫字母、數字和特殊符號
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one number, and one special character!"
      );
      return;
    }

    // 驗證密碼是否與確認密碼一致
    if (password !== confirmPassword) {
      setError("Password and confirm password do not match!");
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

      // 2秒後跳轉到登入頁面
      setTimeout(() => toggleForm(), 2000);
    } catch (err) {
      setError(
        err.response?.data?.msg ||
          "Registration failed, please try again later!"
      );
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <input
        className="input"
        type="text"
        placeholder="Username"
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
          placeholder="Password"
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
          placeholder="Confirm Password"
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
        Sign Up
      </button>

      <p className="link">
        Already have an account ?{" "}
        <span onClick={toggleForm} className="toggle-link">
          Click to log in.
        </span>
      </p>
    </div>
  );
};

export default Register;
