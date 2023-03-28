import React, { useState } from 'react';
import Resume from './resume';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="App">
      <div className={`component ${activeComponent === "About" ? "active" : ""}`}>
        <About />
      </div>
      <div className={`component ${activeComponent === "Resume" ? "active" : ""}`}>
        <Resume />
      </div>
      <div className={`component ${activeComponent === "Experience" ? "active" : ""}`}>
        <Experience />
      </div>  
      <div className={`component ${activeComponent === "Education" ? "active" : ""}`}>
        <Education />
      </div>
      <div className={`component ${activeComponent === "Contact" ? "active" : ""}`}>
        <Contact />
      </div>
      <nav>
        <ul>
          <li onClick={() => handleClick("About")}>About</li>
          <li onClick={() => handleClick("Resume")}>Resume</li>
          <li onClick={() => handleClick("Experience")}>Experience</li>
          <li onClick={() => handleClick("Education")}>Education</li>
          <li onClick={() => handleClick("Contact")}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
