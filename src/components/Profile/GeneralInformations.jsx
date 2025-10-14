import React from 'react';
import './GeneralInformations.css';

const GeneralInformations = ({ patientData }) => {
  return (
    <div className="general-info-container">
      <h3 className="general-info-title">General Informations :</h3>
      <div className="info-grid">
        <div className="info-row">
          <span className="info-label">Gender :</span>
          <span className="info-value">{patientData?.gender || 'Female'}</span>
          <span className="info-label blood-type-label">Blood type :</span>
          <span className="info-value-center">{patientData?.bloodType || 'O+'}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Height :</span>
          <span className="info-value">{patientData?.height || '1.65 Cm'}</span>
          <span className="info-label weight-label">Weight :</span>
          <span className="info-value-center">{patientData?.weight || '56 Kg'}</span>
        </div>
        <div className="info-row diseases-row">
          <span className="info-label">Diseases :</span>
          <span className="info-value diseases-value">{patientData?.diseases || 'Blood pressure'}</span>
        </div>
        <div className="info-row latest-visit-row">
          <span className="info-label">Latest visit :</span>
          <span className="info-value latest-visit-value">{patientData?.latestVisit || '28-03-2025'}</span>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformations;
