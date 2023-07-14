import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from 'react-modal';
import '../style/common.css';
import '../style/resume.css';
import SkillsChart from "../components/SkillsChart/SkillsChart";

(async function(){
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
})();

Modal.setAppElement('#root')

function Resume() {
  const [showPdf, setShowPdf] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [pageNumber] = useState(1);
  const [scale, setScale] = useState(.7);
  // eslint-disable-next-line
  const [numPages, setNumPages] = useState(null);

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function handleResize() {
      let currentScale = window.innerWidth < 768 ? .7 : .99;
      setScale(currentScale);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // call this function on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid resume-page">
      <h2 className="resume-title mt-1">Resume</h2>
      <div className="row">
        
        <div className="col-lg-6 col-md-12 order-md-2 order-lg-1">
          <SkillsChart />
        </div>
        
        <div className="col-lg-6 col-md-12 order-md-1 order-lg-2">
          <div className="d-flex mb-2">
            <button onClick={togglePdf} className="btn btn-primary mr-2">
              {showPdf ? "Hide Resume" : "View Resume"}
            </button>
            {showPdf && (
              <a href={process.env.REACT_APP_RESUME_PDF} download="joshuaResume2023.pdf" className="btn btn-secondary" rel="noreferrer" target='_blank'>
                Download Resume
              </a>
            )}
          </div>

          {showPdf && (
            <div className="resume-container" onClick={handleOpenModal}>
              <Document file={process.env.REACT_APP_RESUME_PDF} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
              </Document>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Resume Modal"
        className={{
          base: 'Modal',
          afterOpen: 'Modal--after-open',
          beforeClose: 'Modal--before-close'
        }}
        overlayClassName="Overlay"
      >
        <div className="resume-container">
          <Document file={process.env.REACT_APP_RESUME_PDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={1} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>
      </Modal>
    </div>
  );
}

export default Resume;
