import React from 'react';
import './EmergencyContact.css';
import iconEmm from '../../assets/icons/icon-emm.png';

const EmergencyContact = ({ emergencyData }) => {
  return (
    <div className="emergency-contact-container">
      <div className="emergency-circle">
        <img src={iconEmm} alt="Emergency icon" className="emergency-icon-img" />
      </div>
      <h4 className="emergency-title">Emergency Contact:</h4>
      <p className="emergency-name">
        {emergencyData?.name || 'Karim Ben Youssef (Brother)'}
      </p>
      <p className="emergency-phone">
        {emergencyData?.phone || '+216 52 987 654'}
      </p>
    </div>
  );
};

export default EmergencyContact;
