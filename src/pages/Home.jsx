import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/global.css";

function Home() {

  return (
    <div className="home-container">

      {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <section className="hero">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          French Village International College
        </motion.h1>

        <p className="hero-subtitle">
          Raising Global Leaders with Excellence and Integrity
        </p>

        <div className="hero-buttons">
          <Link to="/register">
            <button className="primary">Apply Now</button>
          </Link>

          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <div className="feature-card">
          <h3>🌍 Global Curriculum</h3>
          <p>
            Our curriculum is internationally recognized and prepares students
            for global opportunities.
          </p>
        </div>

        <div className="feature-card">
          <h3>📚 Academic Excellence</h3>
          <p>
            Top-performing students with consistent academic achievements.
          </p>
        </div>

        <div className="feature-card">
          <h3>💻 Tech Integration</h3>
          <p>
            Modern digital learning tools and student management systems.
          </p>
        </div>

      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">

        <h2>About Our School</h2>

        <p>
          French Village International College is committed to nurturing
          excellence in education, discipline, and leadership.
        </p>

        <Link to="/about">
          <button className="primary">Read More</button>
        </Link>

      </section>

      {/* STATS */}
      <section className="stats">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Students</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Teachers</p>
        </div>

        <div className="stat-box">
          <h2>20+</h2>
          <p>Programs</p>
        </div>

      </section>

      {/* BLOG PREVIEW */}
      <section className="blog-preview">

        <h2>Latest News</h2>

        <div className="blog-card">
          <img src="https://source.unsplash.com/400x200/?students" />
          <h3>New Academic Session Begins</h3>
          <p>Welcome to a new journey of excellence.</p>
        </div>

        <div className="blog-card">
          <img src="https://source.unsplash.com/400x200/?school" />
          <h3>Top Performing Students</h3>
          <p>Celebrating our brightest minds.</p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <p>© 2026 French Village International College</p>

        <div className="footer-links">
          <a>Privacy Policy</a>
          <a>Terms</a>
          <a>Contact</a>
        </div>

      </footer>

    </div>
  );
}

export default Home;