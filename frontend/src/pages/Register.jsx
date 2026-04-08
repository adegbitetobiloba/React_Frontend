import { useState } from "react";

function Register() {
  const [form, setForm] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    console.log(form);
  }

  return (
    <div className="center">
      <div className="card">
        <h2>Student Registration</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange}/>
        <input name="age" placeholder="Age" onChange={handleChange}/>
        <input name="phone" placeholder="Phone" onChange={handleChange}/>
        <input name="course" placeholder="Course" onChange={handleChange}/>
        <input name="country" placeholder="Country" onChange={handleChange}/>
        <input name="state" placeholder="State" onChange={handleChange}/>

        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default Register;