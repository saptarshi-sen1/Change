import React from 'react';

function PdfViewer() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>View the PDF</h2>
      {/* Embed the PDF */}
      <iframe
        src="https://drive.google.com/file/d/1RKhi_DpMz3xAyA0AlQ6l0qH_puVbIU3x/preview"
        width="80%"
        height="600px"
        style={{ border: '1px solid #ddd', borderRadius: '8px' }}
        title="PDF Viewer"
      ></iframe>
      <p>
        If the PDF does not load, you can{' '}
        <a
          href="https://drive.google.com/file/d/1RKhi_DpMz3xAyA0AlQ6l0qH_puVbIU3x/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          view or download it here
        </a>.
      </p>
    </div>
  );
}

export default PdfViewer;