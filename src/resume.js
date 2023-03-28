import React from "react";
function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>Click the link below to view my resume:</p>

      {/*
      <button onClick={togglePdf}>{showPdf ? "Hide Resume" : "View Resume"}</button>
      {showPdf && (
        <object data="./ERSP_SP_Poster.pdf" height="600px" type="application/pdf" width="100%">
          <p>Failed to load PDF file.</p>
        </object>
      )}
      */}
    </div>
  );
}

export default Resume;