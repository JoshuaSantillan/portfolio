import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(project)}>
      <div className="card-inner">
        <img className="card-img-top" src={project.iconImage || ''} alt={project.name} />
        <div className='card-title'>{project.name}</div>
      </div>
    </div>
  );
};


export default ProjectCard;