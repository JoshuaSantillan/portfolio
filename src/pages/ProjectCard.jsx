import React from 'react';
import '../style/ProjectCard.css';

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className="project-card" onClick={() => onSelect(project)}>
      <div className="project-card-inner">
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
      </div>
    </div>
  );
};



export default ProjectCard;
