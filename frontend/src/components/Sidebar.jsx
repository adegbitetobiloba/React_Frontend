import { Home, Users } from "lucide-react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>⚡</h2>

      <button onClick={() => setPage("dashboard")}>
        <Home size={20} />
      </button>

      <button onClick={() => setPage("students")}>
        <Users size={20} />
      </button>
    </div>
  );
}

export default Sidebar;