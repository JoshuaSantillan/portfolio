import React from 'react';
import '../style/ProjectCard.css';

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className="card bg-dark text-white" onClick={() => onSelect(project)}>
      <div className="card-inner">
        <img className="card-img-top" src={project.image} alt={project.name} />
        <div className='card-title'>{project.name}</div>
      </div>
      </div>
  );
};

export default ProjectCard;