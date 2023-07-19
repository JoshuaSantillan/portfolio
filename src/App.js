import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectsGallery from "./pages/ProjectsGallery";
import Backlog from "./pages/Backlog";
import TestParticles from "./pages/TestParticles";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    if (currentPath !== location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [currentPath, location.pathname]);

  // GH pages route catch?
  const RedirectToHome = () => <Navigate to="/" replace />;

  return (
    <div className={menuOpen ? "open" : ""}>
      <main>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<About />} />
          <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
          <Route path={process.env.PUBLIC_URL + "/resume"} element={<Resume />} />
          <Route path={process.env.PUBLIC_URL + "/projectsgallery"} element={<ProjectsGallery />} />
          <Route path={process.env.PUBLIC_URL + "/backlog"} element={<Backlog />} />
          <Route path={process.env.PUBLIC_URL + "/testparticles"} element={<TestParticles />} />
          <Route path="/*" element={<RedirectToHome />} />
        </Routes>
      </main>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
