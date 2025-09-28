import React, { useState } from 'react';
import './Home.css';

function Home({ navigate }) {
  const [verificationStatus, setVerificationStatus] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      verifyCertificate();
    }
  };

  const verifyCertificate = () => {
    setVerificationStatus('verifying');
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setVerificationStatus(isSuccess ? 'authentic' : 'invalid');
    }, 2000);
  };

  const renderStatus = () => {
    switch (verificationStatus) {
      case 'verifying':
        return <div className="status verifying">Verifying...</div>;
      case 'authentic':
        return <div className="status authentic">✔ Authentic</div>;
      case 'invalid':
        return <div className="status invalid">✖ Invalid/Tampered</div>;
      default:
        return null;
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>Securely Erase and Verify Your Data</h1>
          <p>TrueErase provides a trusted, transparent, and verifiable data sanitization process.</p>
          <button className="cta-button" onClick={() => navigate('signup')}>
            Sign Up Now
          </button>
        </div>
      </section>
      <section className="verification-portal">
        <div className="container">
          <h2>Public Verification Portal</h2>
          <p>Instantly verify the authenticity of a TrueErase certificate.</p>
          <div className="verification-box">
            <div className="verification-actions">
              <label htmlFor="file-upload" className="upload-button">
                Upload Certificate (PDF/JSON)
              </label>
              <input id="file-upload" type="file" onChange={handleFileChange} accept=".pdf,.json" />
              <button className="qr-button">Scan QR Code</button>
            </div>
            {fileName && <p className="file-name">File: {fileName}</p>}
            <div className="verification-status">
              {renderStatus()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
