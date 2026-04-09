import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "../styles/global.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleLogin() {
    setLoading(true);
    setError("");

    try {
      const data = await loginUser(form.email, form.password);

      console.log("LOGIN RESPONSE:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);

        // 🔥 THIS IS WHAT YOU WERE MISSING
        navigate("/dashboard");

      } else {
        setError(data.error || "Login failed");
      }

    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="logo">🎓 EduCore</h1>
        <p className="subtitle">Welcome back</p>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}

export default Login;