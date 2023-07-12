import React from 'react';
import '../style/ProjectDetails.css';
export const projects = [
  {
    name: "Fragment Shader",
    tags: ['OpenGL'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1,
    description: 'This is a cool OpenGL project.',
    images: [process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_0, process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1],
    summary: 'Fragment Shader',
    pdf: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_PDF_0,
  },
  {
    name: "Lighting & Shadow Mapping",
    tags: ['OpenGL'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_0,
    description: 'This is a cool OpenGL project.',
    images: [process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_0, process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_1,
    process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_2, process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_3, process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_4,
    process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_5],
    summary: 'Scene Mapping Lighting & Shadows',
    pdf: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_PDF_0,
  },
  {
    name: "Subdivision",
    tags: ['OpenGL'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_0,
    description: 'This is a cool OpenGL project.',
    images: [process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1],
    summary: 'Fragment Shader',
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_0, process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_1, process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_2],
    pdf: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_PDF_0,
  },
  {
    name: "Particle System",
    tags: ['Houdini'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_IMAGE_0,
    description: 'This is a Houdini project.',
    summary: 'Summary for FireWork particle simulator',
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_VIDEO_0],
  },
  {
    name: "Cloth Simulation",
    tags: ['Houdini'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_IMAGE_0,
    description: 'This is a Houdini project.',
    summary: 'Summary for Cloth simulator',
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_0, process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_1],
  },
  {
    name: "Network Simulator",
    tags: ['Research'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_IMAGE_0,
    description: 'network stuff',
    summary: 'Summary for network stuff',
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_VIDEO_0],
  },
  {
    id: "colorGame",
    name: "Color Game",
    tags: ['Web'],
    image: process.env.REACT_APP_PORTFOLIO_PROJECT_HTML_0,
    description: 'This is a Houdini project.',
    summary: 'Summary for Cloth simulator',
}
];

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      {/* Project Name */}
      <h1>{project.name}</h1>

      {/* Images */}
      <div className="project-media video-container">
        {project.images && project.images.map((image, index) => (
          <img key={index} src={image} alt={`${project.name} ${index + 1}`} />
        ))}

        {project.videos && project.videos.map((video, index) => (
          <video key={index} autoPlay muted playsInline loop controls={false}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Summary */}
      <div className="project-summary">
        <p>{project.summary}</p>
      </div>

      {/* PDF Link */}
      {project.pdf && (
        <div className="project-pdf">
          <a href={process.env.PUBLIC_URL + project.pdf} target="_blank" rel="noopener noreferrer">
            View Write-up
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;