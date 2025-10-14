import React from 'react';
import './TestReports.css';
import iconBloodd from '../../assets/icons/icon-bloodd.png';
import frame7 from '../../assets/icons/Frame7.png';
import frame8 from '../../assets/icons/Frame8.png';
import frame9 from '../../assets/icons/Frame9.png';

const TestReports = ({ testData }) => {
  return (
    <div className="test-reports-container">
      <h3 className="test-reports-title">Test Reports</h3>

      <div className="test-item">
        <div className="test-left-group">
          <img src={iconBloodd} alt="Blood test icon" className="test-icon" />
          <h4 className="test-name">{testData?.testName || 'Blood Test Results'}</h4>
        </div>
        <div className="test-right-group">
          <p className="test-date">{testData?.date || '20 August 2025'}</p>
          <span className="file-size-complete">
            <span className="file-size-label">File size :</span>
            <span className="file-size-value">{testData?.fileSize || '4 MB'}</span>
          </span>
          <div className="action-buttons">
            <img src={frame7} alt="Action 1" className="action-icon" />
            <img src={frame8} alt="Action 2" className="action-icon" />
            <img src={frame9} alt="Action 3" className="action-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestReports;
