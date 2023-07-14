import React from "react";
import '../style/Backlog.css'

function Backlog() {
  return (
    <div className="backlog-page text-center text-white">
      <h2 className="backlog-title">Backlog</h2>
      <a href = "https://github.com/JoshuaSantillan/portfolio/tree/main/" target="_blank" without rel="noreferrer">
      <h3 className="todo-title"><br />To Do:</h3></a>
      <div className="shiftCenter">
        <ul className="todo-list">
          <li>Project Card Images Have Same Size</li>
          <li>Finish Components for each project</li>
          <li>Finish Color Swatch Theme</li>
          <li>Gradient cards</li>
          <li>Link to other people's sites</li>
          <li>Footer</li>
          <li>Documentation (would put this at the bottom)</li>
          <li>Super Topic Secret Three.js Background</li>
          <li>Fix Router to work on GH Pages or buy domain</li>
        </ul>
      </div>
    </div>
  );
}

export default Backlog;
