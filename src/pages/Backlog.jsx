import React from "react";
import '../style/Backlog.css'

function Backlog() {
  return (
    <div className="backlog-page text-center text-white">
      <h2 className="backlog-title">Backlog</h2>
      <h3 className="todo-title">To Do:</h3>
      <div className="shiftCenter">
      <ul className="todo-list">
        <li>Finish Components for each project</li>
        <li>Documentation</li>
        <li>Finish Color Swatch Theme</li>
        <li>Gradient cards</li>
        <li>Hamburger Menu for small screen</li>
        <li>Footer</li>
        <li>Fix Skill chart consider other visualization</li>
        <li>Link to other people's sites</li>
        <li>Resume Downloads from CDN correctly</li>
        <li>Background implemented by Three.js or WEBGL</li>
        <li>Come up with a nicer PDF viewer</li>
      </ul>
      </div>
    </div>
  );
}

export default Backlog;
