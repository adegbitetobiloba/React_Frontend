import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>EduCore</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/blog">Blog</Link>
        <br />
        <Link to="/admission">Admission</Link>
      </nav>
    </div>
  );
}

export default Sidebar;