import React from 'react';
import './PatientCard.css';

// Import de l'image ellipse9
import ellipse9 from '../../assets/icons/Ellipse9.png';

const PatientCard = ({ patientData }) => {
  return (
    <div className="patient-card">
      <div className="patient-id-container">
        <span className="patient-id-text">PTN-092845</span>
      </div>
      <div className="patient-details">
        <div className="ellipse9-container">
          <img src={ellipse9} alt="Ellipse decoration" className="ellipse9-image" />
          <div className="patient-online-indicator"></div>
        </div>
        <h3>{patientData.name}</h3>
        <p>{patientData.phone}</p>
        <p>{patientData.email}</p>
      </div>
    </div>
  );
};

export default PatientCard;
