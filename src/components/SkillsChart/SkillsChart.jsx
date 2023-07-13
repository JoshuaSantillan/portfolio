import React from 'react';
import './SkillsChart.css';

const SkillsChart = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'CSS', level: 75 },
  ];

  return (
    <div className="skills-container">
      <h3 className="skills-title">Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsChart;
