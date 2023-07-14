import React, { useState } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectsGallery from "./pages/ProjectsGallery";
import Backlog from "./pages/Backlog";
import { Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={menuOpen ? "open" : ""}>
      <main>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projectsgallery" element={<ProjectsGallery />} />
          <Route path="/backlog" element={<Backlog />} />
        </Routes>
      </main>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
