import React from 'react';
import './Dashboard.css';

function Dashboard({ onViewDetails }) {
  // Simplified to show only one device history item
  const singleWipe = {
    id: 1,
    deviceName: 'Kingston SSD',
    date: '2024-09-28',
    status: 'Completed',
    details: {
      method: 'NIST 800-88 Purge',
    }
  };

  return (
    <div className="dashboard-page">
      <div className="container">
        <header className="dashboard-header">
          <h1>Welcome, User</h1>
          <p>This is your personal hub for managing and viewing your data wipe history.</p>
        </header>

        <section className="wipe-history">
          <h2>Wipe History</h2>
          <div className="wipe-list">
            {/* Displaying only the single wipe card */}
            <div className="wipe-card" key={singleWipe.id}>
              <h3>Device: {singleWipe.deviceName}</h3>
              <p><strong>Date:</strong> {singleWipe.date}</p>
              <p><strong>Status:</strong> <span className="status-completed">{singleWipe.status}</span></p>
              <button onClick={() => onViewDetails(singleWipe)}>View Details</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
