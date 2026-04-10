import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "../styles/global.css";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    state: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function handleSubmit() {

    const res = await registerUser(form);

    if (res.error) {
      setMessage(res.error);
    } else {
      setMessage("OTP sent!");
      
      // move to OTP page
      navigate("/verify-otp", { state: { email: form.email } });
    }
  }

  return (
    <div>

      <h2>Register</h2>

      <input name="firstName" placeholder="First Name" onChange={handleChange}/>
      <input name="lastName" placeholder="Last Name" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="password" placeholder="Password" onChange={handleChange}/>
      <input name="country" placeholder="Country" onChange={handleChange}/>
      <input name="state" placeholder="State" onChange={handleChange}/>

      <button onClick={handleSubmit}>Register</button>

      <p>{message}</p>

    </div>
  );
}

export default Register;
