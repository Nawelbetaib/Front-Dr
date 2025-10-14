import React from 'react';
import './Previous.css';

// Import des icônes
import stellIcon from '../../assets/icons/stell.png';
import cont1Icon from '../../assets/icons/cont1.png';
import cont2Icon from '../../assets/icons/cont2.png';
import cont3Icon from '../../assets/icons/cont3.png';
import cont4Icon from '../../assets/icons/cont4.png';

const Previous = ({ previousData }) => {
  return (
    <div className="previous-container">
      {/* Header avec onglets */}
      <div className="previous-header">
        <div className="tab-item active">
          <span className="tab-text">Previous Visit Information</span>
          <div className="tab-underline"></div>
        </div>
        <div className="tab-item">
          <span className="tab-text">Previous Treatments</span>
          <div className="tab-underline-gray"></div>
        </div>
      </div>

      {/* Section Latest Consultation Details */}
      <div className="consultation-header">
        <span className="consultation-title">Latest Consultation Details</span>
        <div className="see-all">
          <span className="see-all-text">See all</span>
          <img src={stellIcon} alt="Arrow" className="stell-icon" />
        </div>
      </div>

      {/* Container 08 OCT 2025 */}
      <div className="date-container">
        <div className="date-line"></div>
        <div className="date-content">
          <div className="date-text">08<br/>OCT<br/>2025</div>
          <div className="date-separator"></div>
          <div className="visit-info">
            <div className="visit-section">
              <div className="visit-label">Reason for Last Visit</div>
              <div className="visit-description">Persistent headaches and fatigue</div>
            </div>
              <div className="date-separator"></div>
            <div className="visit-section">
              <div className="visit-label">Visit Conclusion</div>
              <div className="visit-description">Mild Iron Deficiency Anemia</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 containers avec icônes */}
      <div className="metrics-container">
        <div className="metric-item">
          <div className="metric-icon-circle">
            <img src={cont1Icon} alt="Blood Pressure" className="metric-icon" />
          </div>
          <div className="metric-label">Blood Pressure:</div>
          <div className="metric-value-container">
            <div className="metric-value">76</div>
            <div className="metric-unit">bpm</div>
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-icon-circle">
            <img src={cont2Icon} alt="Blood Pressure" className="metric-icon" />
          </div>
          <div className="metric-label">Blood Pressure:</div>
          <div className="metric-value-container">
            <div className="metric-value">125/80</div>
            <div className="metric-unit">mmHg</div>
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-icon-circle">
            <img src={cont3Icon} alt="Temperature" className="metric-icon" />
          </div>
          <div className="metric-label">Temperature</div>
          <div className="metric-value-container">
            <div className="metric-value">37.1</div>
            <div className="metric-unit">°C</div>
          </div>
        </div>

        <div className="metric-item">
          <div className="metric-icon-circle">
            <img src={cont4Icon} alt="Blood Glucose" className="metric-icon" />
          </div>
          <div className="metric-label">Blood Glucose</div>
          <div className="metric-value-container">
            <div className="metric-value">92</div>
            <div className="metric-unit">mg/dL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previous;
