import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      alert("登入成功，Token：" + res.data.token);
    } catch (err) {
      setError("Login failed, please check your username and password!");
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
      </div>
    </div>
  );
};

export default Login;
