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
    'Tools': [
      { name: 'Linux/PowerShell', level: 90 },
      { name: 'GIT', level: 75 },
      { name: 'Docker', level: 68 },
      { name: 'Kubernetes', level: 60 },
      { name: 'OPENGL', level: 69 },
      { name: 'Wireshark', level: 65 },
      { name: 'John the Ripper', level: 55 },

    ],
    'Skills': [
      { name: 'Calculus', level: 93 },
      { name: 'Object-Oriented Programming (OOP)', level: 85 },
      { name: 'Data Structures', level: 83 },
      { name: 'Algorithmic Analysis', level: 80 },
      { name: 'Bash Scripting', level: 75 },
      { name: 'Network Protocols', level: 77 },
      { name: 'Performance Optimization', level: 70 },
      { name: 'DBMS/SQL', level: 67 },
      { name: 'Packet Sniffing', level: 58 },
    ],
    'Frameworks': [
      { name: 'React', level: 75 },
      { name: 'Ruby on Rails', level: 55 },

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
              backgroundColor: group === activeGroup ? '#393e46' : '#0C7075',
              borderColor: group === activeGroup ? '#393e46' : '#072E33',
              color: group === activeGroup ? '#E4E2DF' : "#fff",

            }}
            className={`btn skill-btn skill-group ${group === activeGroup ? 'active' : ''}`}
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