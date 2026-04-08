import { useEffect, useState } from "react";
import { getStudents, addStudent, deleteStudent } from "../services/api";

function Dashboard({ token, setToken }) {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  async function load() {
    const data = await getStudents(token);
    setStudents(data);
  }

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents(token);
      setStudents(data);
    };
    fetchStudents();
  }, [token]);

  async function handleAdd() {
    await addStudent({ name, course }, token);
    setName("");
    setCourse("");
    load();
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>🚀</h2>
        <button>Dashboard</button>
      </aside>

      {/* MAIN */}
      <div className="main">

        <div className="topbar">
          <h2>Students</h2>
          <button onClick={logout}>Logout</button>
        </div>

        <div className="form">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          <input value={course} onChange={e => setCourse(e.target.value)} placeholder="Course" />
          <button onClick={handleAdd}>Add</button>
        </div>

        <h3>Total: {students.length}</h3>

        <ul>
          {students.map(s => (
            <li key={s._id}>
              {s.name} - {s.course}
              <button onClick={() => { deleteStudent(s._id, token); load(); }}>❌</button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Dashboard;