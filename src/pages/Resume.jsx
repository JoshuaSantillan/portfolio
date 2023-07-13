import React, { useState } from "react";
import '../style/common.css';
import '../style/resume.css';
import SkillsChart from "../components/SkillsChart/SkillsChart";

function Resume() {
  const [showPdf, setShowPdf] = useState(true);

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div className="container-fluid mt-5 resume-page">
      <h2 className="resume-title">Resume</h2>
      <div className="row">

        {/* Skills Chart */}
        <div className="col-md-4"> {/* Adjust the column size as needed */}
          <SkillsChart />

          {/* Recommendations */}
          {/* TODO: Add recommendations section here */}

          {/* Certifications and Awards */}
          {/* TODO: Add certifications and awards section here */}
        </div>

        {/* Resume PDF */}
        <div className="col-md-8"> {/* Adjust the column size as needed */}
          <button onClick={togglePdf} className="btn btn-primary mb-2">
            {showPdf ? "Hide Resume" : "View Resume"}
          </button>

          {showPdf && (
            <div className="iframe-container"> {/* Apply styles to a container around the iframe */}
              <iframe
                src={process.env.REACT_APP_RESUME_PDF}
                width="100%"
                height="600px"
                title="resume frame"
              >
                <p>Failed to load PDF file.</p>
              </iframe>
            </div>
          )}

          {/* Button to download PDF resume */}
          <div className="mt-2">
            <a href="/joshuaResume2023.pdf" download="https://res.cloudinary.com/dbn76qfin/image/upload/v1688543815/Projects/joshSantillan_juneresume23_opxm20.pdf" className="btn btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
