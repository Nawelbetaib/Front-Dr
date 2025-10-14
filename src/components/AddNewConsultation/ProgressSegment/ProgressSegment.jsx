import React from 'react';
import './ProgressSegment.css';

const ProgressSegment = ({ currentStep }) => {
  return (
    <div className={`progress-segment progress-step-${currentStep}`}>
      <div className="progress-segment-fill"></div>
    </div>
  );
};

export default ProgressSegment;
