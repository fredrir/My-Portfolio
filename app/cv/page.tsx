import React from 'react';

const CVPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="/cv.pdf"
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it.
      </iframe>
    </div>
  );
};

export default CVPage;