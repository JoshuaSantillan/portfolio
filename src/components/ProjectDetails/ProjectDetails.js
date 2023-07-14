import React from 'react';
import './ProjectDetails.css';
export const projects = [
  {
    name: "Color Game",
    tags: ['Javascript'],
    id: 'colorGame',
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HTML_0,
    images: [
      process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_0
    ],
    imageDescriptions: ['Test Caption One', 'Test Caption Two'],
    videos: [],
    videoDescriptions: [],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL3_PDF_0],
    pdfDescriptions: ['This is a PDF of Fragment Shader'],
    summary: 'Fragment Shader',
  },
  {
    name: "Fragment Shader",
    tags: ['OpenGL'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1,
    images: [
      process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_0
    ],
    imageDescriptions: ['Test Caption One', 'Test Caption Two'],
    videos: [],
    videoDescriptions: [],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL3_PDF_0],
    pdfDescriptions: ['This is a PDF of Fragment Shader'],
    summary: 'Fragment Shader',
  },
  {
    name: "Particle System",
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_IMAGE_0,
    images: [],
    imageDescriptions: ['This is an image of Particle System project'],
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_VIDEO_0],
    videoDescriptions: ['This is a video of Particle System project'],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Summary for FireWork particle simulator',
  },
  {
    name: "Cloth Simulation",
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_IMAGE_0,
    images: [],
    imageDescriptions: ['This is an image of Cloth Simulation project'],
    videos: [
      process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_0,
      process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_1
    ],
    videoDescriptions: ['This is video 1 of Cloth Simulation project', 'This is video 2 of Cloth Simulation project'],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Summary for Cloth simulator',
  },
  {
    name: "Subdivision",
    tags: ['OpenGL'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_0,
    images: [
      process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1
    ],
    imageDescriptions: ['This is an image of Subdivision project', 'This is another image of Subdivision project'],
    videos: [
      process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_0,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_1,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_2
    ],
    videoDescriptions: [
      'This is video 1 of Subdivision project',
      'This is video 2 of Subdivision project',
      'This is video 3 of Subdivision project'
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL4_PDF_0],
    pdfDescriptions: ['This is a PDF of Subdivision'],
    summary: 'Fragment Shader',
    videoControls: true,
  },
  {
    name: "Lighting & Shadow Mapping",
    tags: ['OpenGL'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_0,
    images: [
      process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_1,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_2,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_3,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_4,
      process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_5
    ],
    imageDescriptions: [
      'Test Caption One', 'Test Caption Two', 'Test Caption Three',
      'Test Caption Four', 'Test Caption Five', 'Test Caption Six'
    ],
    videos: [],
    videoDescriptions: [],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL1_PDF_0],
    pdfDescriptions: ['This is a PDF of Lighting & Shadow Mapping'],
    summary: 'Scene Mapping Lighting & Shadows',
  },
  {
    name: "Network Simulator",
    tags: ['Research'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_IMAGE_0,
    images: [],
    imageDescriptions: ['This is an image of Network Simulator project'],
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_VIDEO_0],
    videoDescriptions: ['This is a video of Network Simulator project'],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Summary for network stuff',
    videoControls: true,
  },
];


const ImageWithCaption = ({ src, caption }) => (
  <div className="image-with-caption">
    <img src={src} alt={caption} />
    <p>{caption}</p>
  </div>
);

const VideoComponent = ({ src, controls }) => (
  <div className="video-container">
    <video
      autoPlay={!controls}
      muted={!controls}
      playsInline
      loop={!controls}
      controls={controls}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const PDFLink = ({ src }) => (
  <div className="project-pdf">
    <a href={src} target="_blank" rel="noopener noreferrer">
      View Write-up
    </a>
  </div>
);

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details text-white">
      <h1>{project.name}</h1>

      <div className="project-summary">
        <p>{project.summary}</p>
      </div>

      <div className="project-media video-container">
        {project.images && project.images.length > 0 && project.images.map((img, index) => (
          <ImageWithCaption key={index} src={img} caption={project.imageDescriptions[index]} />
        ))}


        {project.videos && project.videos.length > 0 && project.videos.map((video, index) => (
          <VideoComponent key={index} src={video} controls={project.videoControls} />
        ))}



        {project.pdfs && project.pdfs.length > 0 && project.pdfs.map((pdf, index) => (
          <PDFLink key={index} src={pdf} />
        ))}
      </div>

    </div>
  );
};

export default ProjectDetails;