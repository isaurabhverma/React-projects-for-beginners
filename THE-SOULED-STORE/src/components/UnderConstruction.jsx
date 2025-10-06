import React from 'react';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-box">
        <h1 className="construction-title">🚧 Project Under Construction 🚧</h1>
        <p className="construction-message">
          This project is currently in the building stage and is only intended for frontend development.
        </p>
        <p className="construction-note">
          Thank you for your patience! Stay tuned for more updates.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
