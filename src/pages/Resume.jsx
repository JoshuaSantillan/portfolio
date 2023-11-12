import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import Modal from 'react-modal';
import '../style/common.css';
import '../style/resume.css';
import SkillsChart from "../components/SkillsChart/SkillsChart";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



Modal.setAppElement('#root');

function Resume() {
  const [showPdf, setShowPdf] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [scale, setScale] = useState(.7);
  const [modalScale] = useState(1);

  const [buttonClass, setButtonClass] = useState('btn btn-primary mr-2 resume-btn');
  const [showMainPageNextButton, setShowMainPageNextButton] = useState(true);


  const togglePdf = () => {
    if (!showPdf) {
      setButtonClass('btn btn-primary mr-2 resume-btn clicked');
    } else {
      setButtonClass('btn btn-primary mr-2 resume-btn');
    }
    setShowPdf(!showPdf);
  };


  const handleOpenModal = () => {
    setPageNumber(1);
    setShowModal(true);
    setShowMainPageNextButton(false);

  }

  const handleCloseModal = () => {
    setShowModal(false);
    setPageNumber(1);
    setShowMainPageNextButton(true);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(1);
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(prevPageNumber => {
        const newPageNumber = prevPageNumber + 1;
        return newPageNumber;
      });
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => {
        const newPageNumber = prevPageNumber - 1;
        return newPageNumber;
      });
    }
  };

  useEffect(() => {
    function handleResize() {
        let currentScale = 1;

        if (window.innerWidth >= 3840) {
            currentScale = 0.9;
        } else if (window.innerWidth < 768) {
            currentScale = 0.7;
        } else if (window.innerHeight <= 890) {
            currentScale = 0.8;
        } else {
            currentScale = 1;  // Defualt size
        }

        setScale(currentScale);
    }

    // Register event and cleanup.
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, []);


  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  return (
    <div className="container-fluid resume-page container">
      <h2 className="resume-title mt-1 title-color">resume</h2>

      <div className="row resume-row">
      <div className="col-lg-6 col-md-12 order-sm-2 order-md-1">

          <SkillsChart />
        </div>
        <div className="col-lg-6 col-md-12 order-sm-1 order-md-2">

          <div className="d-flex mb-2 justify-content-center">
            <button style={{ backgroundColor: showPdf ? '#393e46' : '#0C7075', borderColor: showPdf ? '#05161A' : '#0C7075' }} onClick={togglePdf} className={buttonClass}>
              {showPdf ? "Hide Resume" : "View Resume"}
            </button>

            {showPdf && (
              <a href={process.env.REACT_APP_RESUME_PDF1} download="joshuaResume2023.pdf" className="btn btn-secondary" rel="noreferrer" target='_blank'>
                Download Resume
              </a>
            )}
          </div>

          {showPdf && (
    <div className="resume-container justify-content-center" onClick={handleOpenModal}>
        <div style={{ position: 'relative' }}>
            {numPages > 1 && showMainPageNextButton && 
                <FaArrowRight style={{ position: 'absolute', right: '1%', top: '50%', fontSize: '25px', color: '#000000', cursor: 'pointer', zIndex: 9999 }} />
            }
            <Document file={process.env.REACT_APP_RESUME_PDF1} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
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
          {pageNumber !== 1 && <FaArrowLeft onClick={prevPage} style={{ position: 'absolute', left: '10px', fontSize: '30px', cursor: 'pointer', zIndex: 9999 }} />}
          <Document file={process.env.REACT_APP_RESUME_PDF1} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={modalScale} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
          {pageNumber !== numPages && <FaArrowRight onClick={nextPage} style={{ position: 'absolute', right: '10px', fontSize: '30px', cursor: 'pointer' }} />}
        </div>
      </Modal>




    </div>
  );
}

export default Resume;