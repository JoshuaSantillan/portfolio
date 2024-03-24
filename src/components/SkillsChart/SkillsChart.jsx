import React, { useState } from 'react';
import './SkillsChart.css';

const SkillsChart = () => {
const skillGroups = {
  'Programming Langauges': [ 
    { name: 'C++17', level: 85 },
    { name: 'Python', level: 84 },
    { name: 'Javascript', level: 70 },
    { name: 'C', level: 68 },
    { name: 'Java', level: 65 },
    { name: 'PHP', level: 55 },
    { name: 'GO', level: 45 },
    { name: 'Assembly (x86/ARM)', level: 43 },
  ],
  'Tools': [ 
    { name: 'Wireshark', level: 73 },
    { name: 'John the Ripper', level: 65 },
    { name: 'tcpdump', level: 74 },
    { name: 'Hashcat', level: 72 },
    { name: 'Bash/Powershell', level: 75 },
    { name: 'Cain and Abel', level: 72},
    { name: 'Snort IDS', level: 65 },
    { name: 'GPG (GNU Privacy Guard)', level: 66 },
    { name: 'Netcat', level: 65 },
    { name: 'Nmap', level: 71 },
    { name: 'Metasploit', level: 70 },
    { name: 'Meterpreter', level: 65 },
  ],
  'Skills': [ // Theoretical knowledge, concepts, and methodologies
    { name: 'Packet Sniffing', level: 58 },
    { name: 'Calculus', level: 93 },
    { name: 'Object-Oriented Programming (OOP)', level: 85 },
    { name: 'Data Structures', level: 83 },
    { name: 'Network Traffic Analysis', level: 75 },
    { name: 'Web Application Security', level: 70 },
    { name: 'Algorithmic Analysis', level: 80 },
    { name: 'DBMS/SQL', level: 77 },
    { name: 'Digital Forensics and Incident Response', level: 70 },
    { name: 'Cryptography and Cryptanalysis', level: 70 },
    { name: 'Penetration Testing', level: 70 },
    { name: 'Steganography', level: 66 },
    { name: 'Vulnerability Assessment', level: 70 },
    { name: 'Risk Management', level: 70 },
  ],
     'Frameworks': [
      { name: 'React', level: 75 },
      { name: 'Ruby on Rails', level: 55 },

    ],
  'Cloud & Infra': [ // Cloud and Infrastructure skills
    { name: 'Virtualization', level: 70 },
    { name: 'AWS / IAM', level: 65 },
    { name: 'Azure / Intune', level: 65 },
    { name: 'Docker', level: 68 },
    { name: 'Kubernetes', level: 60 },
    { name: 'Terraform', level: 60 },
    { name: 'Cloud Computing Security', level: 65 },
    { name: 'Mobile Device Security', level: 60 },
    { name: 'Container Security', level: 60 },
  ],
  'IR & Exploits': [ // Incident Response and Exploitation Techniques
    { name: 'Dynamic Approach to Incident Response (DAIR)', level: 75 },
    { name: 'Cyber Investigations', level: 75 },
    { name: 'Malware Investigations', level: 69 },
    { name: 'Cloud Incident Response', level: 65 },
    { name: 'Memory Forensics', level: 77 },
    { name: 'Network Forensics', level: 81 },
    { name: 'Linux Forensics', level: 75 },
    { name: 'Password Attacks', level: 76 },
    { name: 'Access Attacks', level: 70 },
    { name: 'Public-Facing Exploitation', level: 70 },
    { name: 'Client-Side Attacks', level: 70 },
    { name: 'Post-Exploitation Techniques', level: 77 },
    { name: 'Evasion Techniques', level: 61 },
    { name: 'Pivoting and Lateral Movement', level: 63 },
    { name: 'Endpoint Security Bypass', level: 65 },
    { name: 'Command Injection', level: 72 },
    { name: 'Cross-Site Scripting (XSS)', level: 71 },
    { name: 'SQL Injection', level: 75 },
  ],
};


  const [activeGroup, setActiveGroup] = useState('Programming Langauges');
  const currentSkills = (skillGroups[activeGroup] || []).sort((a, b) => b.level - a.level);
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