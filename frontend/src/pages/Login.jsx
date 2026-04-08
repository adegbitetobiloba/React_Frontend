import { useState } from "react";
import { loginUser } from "../services/api.js";
import "../styles/global.css";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
  console.log("Login clicked");

  try {
    const data = await loginUser(email, password);
    console.log("Response:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } else {
      alert(data.error || "Login failed");
    }
  } catch (err) {
    console.log("ERROR:", err);
  }
}

  return (
    <div className="center">
      <div className="card">
        <h2>Login</h2>

        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;