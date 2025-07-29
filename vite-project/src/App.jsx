import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Contacts from './pages/Contacts';
import styles from './pages/Profile.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={styles.logo}>MyProfile</div>
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;