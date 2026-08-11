import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router'
import Home from "./pages/Home/Home.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Cv from "./pages/Cv/Cv.jsx";

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>
<div className="statusbar"><span className="dot"></span>Status: Available for opportunities · Türkiye</div>

    <header className="site">
      <nav className="nav">
        <Link className="logo" to={'/'}><span className="prompt">buğra@dev</span>:~$ <span className="cursor"></span></Link>
        <ul className="navlinks">
          <li><Link className="active Link" to="/">Home</Link></li>
          <li><Link className="Link" to="/experience">Experience</Link></li>
          <li><Link className="Link" to="/projects">Projects</Link></li>
          <li><Link className="Link" to="/contact">Contact</Link></li>
          <li><Link className="cta Link" to="/cv">CV</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </main>
    <footer className="site">
      <div className="footer-inner">
        <span>© 2026 Buğra Daryal</span>
        <div className="footer-links">
          <a href="mailto:bugradaryal0@gmail.com">Email</a>
          <a href="https://github.com/bugradaryal" target="_blank" rel="noopener">GitHub</a>
          <a href="https://linkedin.com/in/buğra-daryal" target="_blank" rel="noopener">LinkedIn</a>
          <Link to='/cv'>CV</Link>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
