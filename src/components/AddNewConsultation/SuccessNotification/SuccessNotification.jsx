import React from 'react';
import './SuccessNotification.css';

const SuccessNotification = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="success-notification-overlay">
      <div className="success-notification-container">
        {/* Icône de succès */}
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="#5E9E4D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.25 15L13.75 17.5L18.75 12.5" stroke="#5E9E4D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Texte de succès */}
        <div className="success-text">
          All consultation details, including examination findings and the treatment plan, have been saved to the patient's file.
        </div>
      </div>
    </div>
  );
};

export default SuccessNotification;
