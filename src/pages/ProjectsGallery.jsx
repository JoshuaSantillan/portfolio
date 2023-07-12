import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ProjectDetails, { projects } from './ProjectDetails';
import ProjectCard from './ProjectCard'
import ColorGame from '../components/ColorGame/ColorGame';

const DetailedView = ({ project }) => {
  if (project.id === 'colorGame') {
    return (
        <div className="detailed-view">
            <ColorGame />
        </div>
    );
} else {
    return (
      <div className="detailed-view">
        <ProjectDetails project={project} />
      </div>
    );
  }
};


const ProjectsGallery = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <div className="content-container project-page">
      <CSSTransition
        in={!selectedProject}
        timeout={300}
        classNames="project-list"
        unmountOnExit
      >
        <div>
          {/* Render tag buttons */}
          <div>
            {['All', 'OpenGL', 'Houdini', 'Research'].map((tag) => (
              <button
                key={tag}
                className="filter-button"
                onClick={() => setSelectedTag(tag === 'All' ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {/* Cards Large, medium and small responsive */}
          <div className="row container-fluid">
            {filteredProjects.map((project, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </div>
            ))}
          </div>

        </div>
      </CSSTransition>

      <CSSTransition
        in={!!selectedProject}
        timeout={300}
        classNames="detailed-view"
        unmountOnExit
      >
        <div>
          {selectedProject && (
            <button className="filter-button" onClick={() => setSelectedProject(null)}>
              Back to projects
            </button>
          )}
          <DetailedView project={selectedProject || {}} />
        </div>
      </CSSTransition>
    </div>
  );
};
export default ProjectsGallery;
