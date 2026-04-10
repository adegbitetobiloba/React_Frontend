import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">FVIC</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="nav-auth">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button className="primary">Register</button></Link>
      </div>

    </nav>
  );
}

export default Navbar;
