import { useState } from "react";
import axios from "axios";

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
      setError("登入失敗，請檢查帳號密碼！");
    }
  };

  return (
    <div>
      <h2>登入</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="密碼"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登入</button>
    </div>
  );
};

export default Login;
