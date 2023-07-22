import React from 'react';
import './ProjectDetails.css';

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
            <ImageWithCaption src={media.src} />
            <p>{media.caption}</p>
          </div>
        );
      } else if (media.type === 'video') {
        if (media.description) {
          return (
            <div key={index}>
              <VideoComponent src={media.src} controls={media.controls} />
              <p>{media.description}</p>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <VideoComponent src={media.src} controls={media.controls} />
              <p>{media.caption}</p>
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
      <h1 className='title-color'>{project.name}</h1>

      <div className="project-summary">
        <p>{project.summary}</p>
      </div>
      <div className='project-pdfs'>
        {project.pdfs && project.pdfs.map((pdf, index) => (
          <PDFLink key={index} src={pdf} description={project.pdfDescriptions[index]} />
        ))}
      </div>
      <div className="project-media video-container">
        {checkMediaType(project)}

      </div>
    </div>

  );
};

export default ProjectDetails;
