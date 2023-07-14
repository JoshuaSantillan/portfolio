import React from "react";
import '../style/Backlog.css'

function Backlog() {
  return (
    <div className="backlog-page text-center text-white">
      <h2 className="backlog-title">Backlog</h2>
      <h3 className="todo-title"><br />To Do:</h3>
      <div className="shiftCenter">
      <ul className="todo-list">
        <li className="text-red">Fix PDF Viewing & Resume Page</li>
        <li>Fix Skill chart display onclick</li>
        <li>Hamburger Menu for small screen</li>
        <li>Background implemented by Three.js or WEBGL</li>
        <li>Finish Components for each project</li>
        <li>Finish Color Swatch Theme</li>
        <li>Gradient cards</li>
        <li>Link to other people's sites</li>
        <li>Footer</li>
        <li>Documentation</li>

      </ul>
      </div>
    </div>
  );
}

export default Backlog;
