import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>FVIC Dashboard</h2>

      <details open>
        <summary>Home</summary>
        <Link to="/dashboard">Overview</Link>
      </details>

      <details>
        <summary>Pages</summary>
        <Link to="/about">About</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/blog">Blog</Link>
      </details>

      <details>
        <summary>Portals</summary>
        <p>Teacher</p>
        <p>Student</p>
      </details>

    </div>
  );
}

export default Sidebar;
