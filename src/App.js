import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ProjectsGallery from "./pages/ProjectsGallery";
import Backlog from "./pages/Backlog";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projectsgallery" element={<ProjectsGallery />} />
        <Route path="/backlog" element={<Backlog />} />
      </Routes>
      </main>
    </>
);
}

export default App;
