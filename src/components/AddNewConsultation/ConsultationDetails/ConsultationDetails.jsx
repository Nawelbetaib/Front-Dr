import React from 'react';
import ProgressSegment from '../ProgressSegment/ProgressSegment';
import '../AddNewConsultation.css';
import './ConsultationDetails.css';

const ConsultationDetails = ({ onNextStep, currentStep }) => {
  return (
    <div className="consultation-details-content">
      <div className="consultation-details-header">
        <button className="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="#1D242D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L5 12L12 19" stroke="#1D242D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h3 className="consultation-details-title">Consultation Details</h3>
        <span className="consultation-step">Etape 1/4</span>
      </div>
      
      <p className="consultation-details-description">
        Brief summary of the presenting complaint, symptom timeline, severity, associated features, and relevant history.
      </p>

      {/* Progress Segment */}
      <ProgressSegment currentStep={currentStep} />

      {/* Form Fields */}
      <div className="consultation-form">
        <div className="form-group">
          <label className="form-label">What brings you in today?</label>
          <textarea
            className="form-textarea"
            placeholder="Describe your main concern, when it started, and how severe it is."
          />
        </div>

        <div className="form-group">
          <label className="form-label">Have you experienced this before or noticed any other symptoms?</label>
          <textarea
            className="form-textarea"
            placeholder="Any related symptoms, previous episodes, or additional concerns."
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date and time of consultation:</label>
          <div className="date-input-container">
            <input
              type="text"
              className="form-input"
              placeholder="Select manually (JJ/MM/YYYY)"
            />
            <button className="calendar-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M11 10.5V14.5H15" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 14.5L12.535 12.895C13.109 12.3433 13.8065 11.9367 14.5694 11.7089C15.3323 11.4812 16.1386 11.4389 16.9211 11.5856C17.7037 11.7324 18.4399 12.0638 19.0684 12.5525C19.697 13.0411 20.1998 13.6728 20.535 14.395" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2.5V6.5" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.0001 18.5L19.4651 20.105C18.891 20.6567 18.1936 21.0633 17.4307 21.2911C16.6678 21.5188 15.8615 21.5611 15.079 21.4144C14.2964 21.2676 13.5602 20.9362 12.9317 20.4475C12.3031 19.9589 11.8003 19.3272 11.4651 18.605" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 22.5V18.5H17" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 9V6.5C21 5.96957 20.7893 5.46086 20.4142 5.08579C20.0391 4.71071 19.5304 4.5 19 4.5H5C4.46957 4.5 3.96086 4.71071 3.58579 5.08579C3.21071 5.46086 3 5.96957 3 6.5V20.5C3 21.0304 3.21071 21.5391 3.58579 21.9142C3.96086 22.2893 4.46957 22.5 5 22.5H9.3" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10.5H7" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 2.5V6.5" stroke="#546881" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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

export default ConsultationDetails;
