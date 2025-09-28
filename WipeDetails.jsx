import React from 'react';
import './WipeDetails.css';

function WipeDetails({ wipe, onBack }) {
  if (!wipe) {
    return (
      <div className="container">
        <p>No wipe details to display.</p>
        <button onClick={onBack}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="wipe-details-page">
      <div className="container">
        <button className="back-button" onClick={onBack}>
          &larr; Back to Dashboard
        </button>
        <header className="details-header">
          <h1>Wipe Details: {wipe.deviceName}</h1>
          <p>A comprehensive report of the data sanitization process.</p>
        </header>

        <section className="details-content">
          <div className="detail-item">
            <strong>Date:</strong> {wipe.date}
          </div>
          <div className="detail-item">
            <strong>Status:</strong> <span className="status-completed">{wipe.status}</span>
          </div>
          <div className="detail-item">
            <strong>Method:</strong> {wipe.details.method}
          </div>
        </section>

        <section className="downloads-section">
          <h2>Downloads</h2>
          <div className="download-buttons">
            <button>Download PDF Certificate</button>
            <button>Download Enhanced PDF (with QR)</button>
            <button>Download JSON Certificate</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WipeDetails;
