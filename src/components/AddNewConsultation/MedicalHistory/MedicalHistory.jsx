import React from 'react';
import ProgressSegment from '../ProgressSegment/ProgressSegment';
import '../AddNewConsultation.css';
import './MedicalHistory.css';

const MedicalHistory = ({ onNextStep, onPrevStep, currentStep }) => {
  return (
    <div className="consultation-details-content">
      <div className="consultation-details-header">
        <button className="back-btn" onClick={onPrevStep}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="#1D242D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L5 12L12 19" stroke="#1D242D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h3 className="consultation-details-title">Medical History</h3>
        <span className="consultation-step">Etape 2/4</span>
      </div>
      
      <p className="consultation-details-description">
        The complete health narrative of your patient, instantly accessible for a better consultation.
      </p>

      {/* Progress Segment */}
      <ProgressSegment currentStep={currentStep} />

      {/* Form Fields */}
      <div className="consultation-form">
        <div className="form-group">
          <label className="form-label">Past medical conditions</label>
          <div className="medical-textarea-container">
            <textarea
              className="medical-textarea"
              placeholder="(chronic diseases, surgeries, allergies)"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Current medications</label>
          <div className="medical-textarea-container">
            <textarea
              className="medical-textarea"
              placeholder="Current medications"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Family medical history (if relevant)</label>
          <div className="medical-textarea-container">
            <textarea
              className="medical-textarea"
              placeholder="Family medical history (if relevant)"
            />
          </div>
        </div>

        <div className="form-actions">
          <button className="next-step-btn" onClick={onNextStep}>
            Next Step
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M5.5 12.5H19.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.5 5.5L19.5 12.5L12.5 19.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
