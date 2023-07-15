import React, { useState } from 'react';
import './SkillsChart.css';

const SkillsChart = () => {
  const skillGroups = {
    'Programming Languages': [
      { name: 'C++17', level: 80 },
      { name: 'Python', level: 73 },
      { name: 'Javascript', level: 70 },
      { name: 'C', level: 68 },
      { name: 'Java', level: 65 },
      { name: 'PHP', level: 55 },
      { name: 'GO', level: 45 },
      { name: 'Assembly (x86/ARM)', level: 43 },
    ],
    'Frameworks': [
      { name: 'React', level: 75 },
      { name: 'Ruby on Rails', level: 55 },

    ],
    'Tools': [
      { name: 'Linux/PowerShell', level: 90 },
      { name: 'GIT', level: 75 },
      { name: 'Docker', level: 68 },
      { name: 'Kubernetes', level: 60 },
      { name: 'Wireshark', level: 65 },
      { name: 'John the Ripper', level: 55 },
      { name: 'Arduino', level: 50 },

    ],
    'Skills': [
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithmic Analysis', level: 80 },
      { name: 'Object-Oriented Programming (OOP)', level: 80 },
      { name: 'Bash Scripting', level: 75 },
      { name: 'Network Protocols', level: 77 },
      { name: 'DBMS/SQL', level: 70 },

    ],
  };

  const [activeGroup, setActiveGroup] = useState('Programming Languages');
  const currentSkills = skillGroups[activeGroup] || [];

  return (
    <div className="skills-container container-fluid">
      <h3 className="skills-title">Skills</h3>
      <div className="skill-groups">
        {Object.keys(skillGroups).map(group => (
          <button
            key={group}
            style={{
              backgroundColor: group === activeGroup ? '#05161A' : '#0C7075',
              borderColor: group === activeGroup ? '#05161A' : '#072E33',
            }}
            className={` text-white btn skill-btn skill-group ${group === activeGroup ? 'active' : ''}`}
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