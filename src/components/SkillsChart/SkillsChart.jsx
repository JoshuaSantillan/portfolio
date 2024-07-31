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
    { name: 'Assembly (x86/ARM)', level: 55 },
  ],
  'Tools': [ 
    { name: 'Wireshark', level: 73 },
    { name: 'John the Ripper', level: 65 },
    { name: 'tcpdump', level: 80 },
    { name: 'Hashcat', level: 81 },
    { name: 'Cain and Abel', level: 72},
    { name: 'Snort IDS', level: 65 },
    { name: 'GPG (GNU Privacy Guard)', level: 66 },
    { name: 'Netcat', level: 83 },
    { name: 'Masscan', level: 79 },
    { name: 'Volatility', level: 80 },
    { name: 'Nmap', level: 85 },
    { name: 'Meterpreter', level: 75 },
    { name: 'CloudMapper', level: 83 },
    { name: 'ScoutSuite', level: 82 },
    { name: 'RITA Threat Analysis', level: 75 },
    { name: 'Zeek Logging', level: 75 },
    { name: 'MsfVenom', level: 75 },

  ],
  'Skills': [ // Theoretical knowledge, concepts, and methodologies
    { name: 'Packet Sniffing', level: 80 },
    { name: 'Calculus', level: 93 },
    { name: 'Object-Oriented Programming (OOP)', level: 88 },
    { name: 'Data Structures', level: 83 },
    { name: 'Algorithmic Analysis', level: 80 },
    { name: 'DBMS/SQL', level: 77 },
    { name: 'Digital Forensics and Incident Response', level: 70 },
    { name: 'Cryptography', level: 70 },
    { name: 'Steganography', level: 66 },
    { name: 'Vulnerability Assessment', level: 80 },
    { name: 'Risk Management', level: 80 },
    { name: 'Bash/Powershell Automation & Scripting', level: 75 },


  ],
     'Frameworks': [
      { name: 'React', level: 75 },
      { name: 'Dynamic Approach to Incident Response (DAIR)', level: 85 },
      { name: 'CIS Controls', level: 81 },
      { name: 'MITRE ATT&CK ', level: 82 },
      { name: 'NIST', level: 79 },
      { name: 'Ruby on Rails', level: 55 },
      { name: 'Metasploit', level: 78 },
      { name: 'Burp Suite', level: 66 },

    ],
  'Cloud & Infra': [ // Cloud and Infrastructure skills
    { name: 'Virtualization', level: 70 },
    { name: 'AWS / IAM', level: 65 },
    { name: 'Azure / Intune', level: 65 },
    { name: 'Docker', level: 68 },
    { name: 'Kubernetes', level: 60 },
    { name: 'Terraform', level: 60 },
    { name: 'Cloud Security', level: 65 },
    { name: 'Mobile Device Security', level: 60 },
    { name: 'Container Security', level: 60 },
    { name: 'Kerberos', level: 60 },

  ],
  'IR & Exploits': [ // Incident Response and Exploitation Techniques
    { name: 'Cloud Attacks', level: 70 },
    { name: 'Malware Forensics', level: 77 },
    { name: 'Memory Forensics', level: 77 },
    { name: 'Network Forensics', level: 81 },
    { name: 'Digital Forensics', level: 75 },
    { name: 'Password Attacks', level: 76 },
    { name: 'Drive-By Attacks', level: 70 },
    { name: 'Watering Hole Attacks', level: 70 },
    { name: 'Client-Side Attacks', level: 70 },
    { name: 'Post-Exploitation Techniques', level: 65 },
    { name: 'Evasion Techniques', level: 66 },
    { name: 'Pivoting and Lateral Movement', level: 67 },
    { name: 'Endpoint Security Bypass', level: 66 },
    { name: 'Command Injection', level: 72 },
    { name: 'Cross-Site Scripting (XSS)', level: 71 },
    { name: 'SQLi', level: 75 },
    { name: 'SMB Enumeration', level: 70 },
  ],
};


  const [activeGroup, setActiveGroup] = useState('Programming Langauges');
  const currentSkills = (skillGroups[activeGroup] || []).sort((a, b) => b.level - a.level);
  return (
    <div className="skills-container container-fluid">
      <h3 className="skills-title">Skills</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <a href="https://www.credly.com/badges/cab1eec1-dd7d-49b3-a24b-dcabf9ba52de" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', margin: '0 10px' }}>
          <img
            src={process.env.REACT_APP_GFACT}
            alt="GFACT"
            style={{
              width: '75px',
              height: '75px',
              borderRadius: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </a>
        <a href="https://www.credly.com/badges/6c4f032b-6527-4a99-ba00-57537549d74b" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', margin: '0 10px' }}>
          <img
            src={process.env.REACT_APP_GSEC}
            alt="GSEC"
            style={{
              width: '75px',
              height: '75px',
              borderRadius: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </a>
        <a href="https://www.credly.com/badges/1c3faac1-d6f4-4fa8-b0b5-8f58aa1584d5" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', margin: '0 10px' }}>
          <img
            src={process.env.REACT_APP_GCIH}
            alt="GCIH"
            style={{
              width: '75px',
              height: '75px',
              borderRadius: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </a>
      </div>
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