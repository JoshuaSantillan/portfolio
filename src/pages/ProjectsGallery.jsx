import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectDetails, { projects } from '../components/ProjectDetails/ProjectDetails';
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ColorGame from '../components/ColorGame/ColorGame';

const DetailedView = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [project]);

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
          <div className='filter-button-container'>
            {['All', 'OpenGL', 'Houdini', 'Research', 'Javascript', 'C++'].map((tag) => (
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
          <Container fluid className="p-2 card-container">
            <Row className="justify-content-center flex-sm-row">
              {filteredProjects.map((project, index, test) => (
                <Col key={project.id} xs="9" sm="auto" className="text-center">
                  <ProjectCard index={index} project={project} onSelect={setSelectedProject} />
                </Col>
              ))}
            </Row>
          </Container>

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
            <button className="filter-button filter-clicked" onClick={() => setSelectedProject(null)}>
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
