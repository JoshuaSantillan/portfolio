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

  const routePath = (path) => {
    return process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL + path : path;
  };

  const RedirectToHome = () => <Navigate to={routePath("/")} replace />;

  return (
    <div className={menuOpen ? "open" : ""}>
      <main>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path={routePath("/")} element={<About />} />
          <Route path={routePath("/about")} element={<About />} />
          <Route path={routePath("/resume")} element={<Resume />} />
          <Route path={routePath("/projectsgallery")} element={<ProjectsGallery />} />
          <Route path={routePath("/backlog")} element={<Backlog />} />
          <Route path={routePath("/testparticles")} element={<TestParticles />} />
          <Route path="/*" element={<RedirectToHome />} />
        </Routes>
      </main>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
