import React from 'react';
import './ProjectDetails.css';
export const projects = [
  {
    name: "Color Game",
    id: 'colorGame',
    tags: ['Javascript'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HTML_0,
  },
  {
    name: "Fragment Shader",
    id: 'fragment-shader',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_0, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_1, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_IMAGE_2, caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_VIDEO_0, description: '', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_VIDEO_1, description: '', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL3_VIDEO_2, description: '', controls: false }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL3_PDF_0],
    pdfDescriptions: ['Project Description'],
    summary: 'Fragment Shader',
  },
  {
    name: "Rigging & Animation",
    id: 'rigging-animation',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_0,
    media: [
      {type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_0, caption: 'Test1'},
      {type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_0, description: 'Test2', controls: false},
      {type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL5_IMAGE_1, caption: 'Test3'}
    ],
    videos: [process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_0, process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_1, process.env.REACT_APP_PORTFOLIO_PROJECTGL5_VIDEO_2],
    pdfs: [],
    pdfDescriptions: [''],
    summary: 'This Project Needs more Description',
  },
   {
    name: "Particle System",
    id: 'particle-system',
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI1_VIDEO_0, description: '', controls: false }
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Summary for FireWork particle simulator',
  },
  {
    name: "Decarbonizing Clouds",
    id: 'decarbonizing-clouds',
    tags: ['Research'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_1, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_2, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_3, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_4, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_5, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_IMG_6, caption: '' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_PDF_0, process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH3_PDF_1],
    pdfDescriptions: ['White Paper', 'Technical Description'],
    summary: 'This Project needs more detail',
  },
  {
    name: "Cloth Simulation",
    id: 'cloth-simulation',
    tags: ['Houdini'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_IMAGE_0,
    media: [
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_0, description: '', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_HOUDINI2_VIDEO_1, description: '', controls: false }
    ],
    pdfs: [],
    pdfDescriptions: [],
    summary: 'Something about Spring Dampers and Aerodynamic Drag here',
  },
   {
    name: "Subdivision",
    id: 'subdivision',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_1,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_IMAGE_0, caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_0, description: '', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_1, description: '', controls: false },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL4_VIDEO_2, description: '', controls: false }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL4_PDF_0],
    pdfDescriptions: ['Project Write Up'],
    summary: 'Bezier Curves, Bspline Curves, and recursive sub-division curves',
  },
  {
    name: "Local Illumination",
    id: 'local-illumination',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_3, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_4, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_1, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL1_IMAGE_2, caption: '' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL1_PDF_0],
    pdfDescriptions: ['Project Description'],
    summary: 'Local Illumination with Phong Shading using multiple lights',
  },
  {
    name: "Shadow Mapping",
    id: 'shadow-mapping',
    tags: ['OpenGL', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_0,
    media: [
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_1, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_2, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_3, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_4, caption: '' },
      { type: 'image', src: process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_IMAGE_5, caption: '' }
    ],
    pdfs: [process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_PDF0, process.env.REACT_APP_PORTFOLIO_PROJECTGL_SM_PDF1],
    pdfDescriptions: ['Final Write Up', 'Project Description'],
    summary: 'Extending Local illumination to have shadows',
  },
  {
    name: "Network Simulator",
    id: 'network-simulator',
    summary: 'ERSP 2020 - Presentation',
    tags: ['Research', 'C++'],
    iconImage: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_IMAGE_0,
    media: [
      { type: 'image', src: '', caption: '' },
      { type: 'video', src: process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_VIDEO_0, description: '', controls: false }
    ],
    pdfs: [
      process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_PDF_0,
      process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_PDF_1,
      process.env.REACT_APP_PORTFOLIO_PROJECT_RESEARCH1_PDF_2
    ],
    pdfDescriptions: ["Motivation", "Proposal", "Final Poster"],
  }
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

const PDFLink = ({ src, description }) => (
  <div className="project-pdf">
    <a href={src} target="_blank" rel="noopener noreferrer">
      {description}
    </a>
  </div>
);
const checkMediaType = (project) => {
  if (project.media && project.media.length > 0) {
    return project.media.map((media, index) => {
      if (media.type === 'image') {
        return (
          <div key={index}>
            <p>{media.caption}</p>
            <ImageWithCaption src={media.src}/>
          </div>
        );
      } else if (media.type === 'video') {
        if (media.description) {
          return (
            <div key={index}>
              <p>{media.description}</p>
              <VideoComponent src={media.src} controls={media.controls} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p>{media.caption}</p>
              <VideoComponent src={media.src} controls={media.controls} />
            </div>
          );
        }
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
};

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details text-white">
      <h1>{project.name}</h1>
      <div className="project-summary">
        <p>{project.summary}</p>
      </div>

      <div className="project-media video-container">
        {checkMediaType(project)}

        {project.pdfs && project.pdfs.map((pdf, index) => (
          <PDFLink key={index} src={pdf} description={project.pdfDescriptions[index]} />
        ))}
      </div>
    </div>

  );
};


export default ProjectDetails;
