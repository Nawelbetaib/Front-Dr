import React from 'react';

// Import des icônes PNG
import cont1 from '../../../assets/icons/cont1.png';
import cont2 from '../../../assets/icons/cont2.png';
import cont3 from '../../../assets/icons/cont3.png';
import cont4 from '../../../assets/icons/cont4.png';

// Import du composant ProgressSegment
import ProgressSegment from '../ProgressSegment/ProgressSegment';

// Import des styles CSS
import '../AddNewConsultation.css';
import './PhysicalExamination.css';

const PhysicalExamination = ({ onNextStep, onPrevStep, currentStep }) => {
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
        <span className="consultation-step">Etape 3/4</span>
      </div>

      <p className="consultation-details-description">
        The process of finding what's wrong with your patient. It's a two-part system that provides clarity and direction for their care.
      </p>

      {/* Progress Segment */}
      <ProgressSegment currentStep={currentStep} />

      {/* Form Fields */}
      <div className="consultation-form">
        <div className="form-group">
          <div className="vital-signs-header">
            <span className="vital-signs-title">Vital signs</span>
            <span className="vital-signs-subtitle">(Blood pressure, heart rate, temperature, weight, etc.)</span>
          </div>

          {/* Vital Signs Grid */}
          <div className="vital-signs-grid">
            <div className="vital-sign-item">
              <div className="vital-sign-icon">
                <img src={cont1} alt="Heart beat" />
              </div>
              <span className="vital-sign-label">Heart beat</span>
              <input type="text" className="vital-sign-value" placeholder="72 bpm" />
            </div>

            <div className="vital-sign-item">
              <div className="vital-sign-icon">
                <img src={cont2} alt="Blood Pressure" />
              </div>
              <span className="vital-sign-label">Blood Pressure:</span>
              <input type="text" className="vital-sign-value" placeholder="120/80 mmHg" />
            </div>

            <div className="vital-sign-item">
              <div className="vital-sign-icon">
                <img src={cont3} alt="Temperature" />
              </div>
              <span className="vital-sign-label">Temperature</span>
              <input type="text" className="vital-sign-value" placeholder="37°C" />
            </div>

            <div className="vital-sign-item">
              <div className="vital-sign-icon">
                <img src={cont4} alt="Blood Glucose" />
              </div>
              <span className="vital-sign-label">Blood Glucose</span>
              <input type="text" className="vital-sign-value" placeholder="__ mg/dL" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Physical exam findings</label>
          <div className="exam-textarea-container">
            <textarea
              className="exam-textarea"
              placeholder="Physical exam findings"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Provisional diagnosis / Observations</label>
          <div className="exam-textarea-container">
            <textarea
              className="exam-textarea"
              placeholder="Provisional diagnosis / Observations"
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

export default PhysicalExamination;
