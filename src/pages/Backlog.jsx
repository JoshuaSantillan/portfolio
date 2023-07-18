import React from "react";
import '../style/Backlog.css'

function Backlog() {
  return (
    <div className="backlog-page text-center text-white">
      <h2 className="backlog-title title-color"><span className="accent-2">B</span>acklog</h2>
      <div className="shiftCenter">
        <ul className="todo-list">
          <li>Finish Color Swatch Theme</li>
          <li>Gradient cards</li>
          <li>Finish Project Details</li>
          <li>Super Topic Secret Three.js Background</li>
          <li>Footer</li>
          <li>Link to other people's sites</li>
          <li>Fix Router to work on GH Pages or buy domain</li>
        </ul>
      </div>
    </div>
  );
}

export default Backlog;
