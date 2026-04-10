import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { saveAuth } from "../utils/auth";
import "../styles/global.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {

    const res = await loginUser({ email, password });

    if (res.error) {
      setMessage(res.error);
    } else {
      saveAuth(res);
      navigate("/dashboard");
    }
  }

  return (
    <div>

      <h2>Login</h2>

      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>

    </div>
  );
}

export default Login;
