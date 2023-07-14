import React, { useState } from 'react';
import './SkillsChart.css';

const SkillsChart = () => {
  const skillGroups = {
    'Programming Languages': [
      { name: 'Python', level: 85 },
      { name: 'C++', level: 90 },
      { name: 'Assembly (x86/ARM)', level: 80 },
    ],
    'Frameworks': [
      { name: 'React', level: 80 },
    ],
    'Tools': [
      { name: 'GIT', level: 75 },
      { name: 'Linux/PowerShell', level: 75 },
      { name: 'Arduino', level: 85 },
    ],
    'Skills': [
      { name: 'Algorithmic Analysis', level: 90 },
      { name: 'Bash Scripting', level: 75 },
      { name: 'Data Structures', level: 85 },
      { name: 'Debugging', level: 80 },
      { name: 'Interpersonal Skills', level: 80 },
      // more skills here...
    ],
    // other groups here...
  };

  const [activeGroup, setActiveGroup] = useState('Programming Languages');
  const currentSkills = skillGroups[activeGroup] || [];

  return (
    <div className="skills-container">
      <h3 className="skills-title">Skills</h3>
      <div className="skill-groups">
        {Object.keys(skillGroups).map(group => (
          <button
            key={group}
            className={`btn btn-primary skill-group ${group === activeGroup ? 'active' : ''}`}
            onClick={() => setActiveGroup(group)}
          >
            {group}
          </button>
        ))}
      </div>
      {currentSkills.length > 0 ? (
        <ul className="skills-list">
          {currentSkills.map((skill, index) => (
            <li key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No skills found for the selected group.</div>
      )}
    </div>
  );
};

export default SkillsChart;