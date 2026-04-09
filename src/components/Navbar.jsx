import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="card" style={{display:"flex", justifyContent:"space-between"}}>
      <h2>🎓 EduSaaS</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/admission">Admission</Link>
      </div>
    </div>
  );
}

export default Navbar;