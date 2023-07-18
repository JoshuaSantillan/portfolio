import React from "react";
import '../style/Backlog.css'

function Backlog() {
  return (
    <div className="backlog-page text-center text-white">
      <h2 className="backlog-title title-color">backlog</h2>
      <div className="shiftCenter">
        <ul className="todo-list">
          <li>Fix Circular Component Dependecy on Project Page</li>
          <li>Finish Project Detail Information</li>
          <li>Finish `Secret` Three.js Background</li>
          <li>Fix Router to work on GH Pages or buy domain</li>
        </ul>
      </div>
    </div>
  );
}

export default Backlog;
