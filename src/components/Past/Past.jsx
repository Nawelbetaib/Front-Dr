import React from 'react';
import './Past.css';

// Import des icônes
import iconPast from '../../assets/icons/Icon-past.png';
import iconDNA from '../../assets/icons/Icon-DNA.png';
import iconModify from '../../assets/icons/Icon-modify.png';
import iconIg from '../../assets/icons/ig.png';

const Past = ({ pastData }) => {
  return (
    <div className="past-container">
      <div className="past-header">
        <div className="header-left">
          <img src={iconPast} alt="Past" className="past-icon" />
          <span className="past-text">Past Illnesses</span>
          <img src={iconDNA} alt="DNA" className="dna-icon" />
          <span className="family-text">Family Medical History</span>
        </div>
        <img src={iconModify} alt="Modify" className="modify-icon" />
      </div>

      <div className="past-content">
        <div className="illness-item">
          <div className="illness-header">
            <img src={iconIg} alt="Diagnosed" className="ig-icon" />
            <div className="illness-content">
              <span className="illness-date">Diagnosed 2015</span>
              <div className="illness-description">Chronic Diseases: Asthma</div>
            </div>
          </div>

        </div>

        <div className="illness-item">
          <div className="illness-header">
            <img src={iconIg} alt="Hospitalizations" className="ig-icon" />
            <div className="illness-content">
              <span className="illness-date">Hospitalizations 2018</span>
              <div className="illness-description">Pneumonia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
