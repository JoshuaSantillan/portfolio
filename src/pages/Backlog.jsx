import React from "react";
import '../style/Backlog.css'

function Backlog() {
  return (
    <div className="backlog-page text-center text-white">
      <h2 className="backlog-title title-color">backlog</h2>
      <div className="shiftCenter">
        <p>What's left for Version 1.0:</p>
        <ul className="todo-list">
          <li>Finish `Secret` Three.js Background</li>
        </ul>
      </div>
    </div>
  );
}

export default Backlog;
