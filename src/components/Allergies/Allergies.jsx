import React from 'react';
import './Allergies.css';

// Import des icônes
import iconAllergies from '../../assets/icons/Icon-allergies1.png';
import iconVaccination from '../../assets/icons/Icon-Vaccination.png';
import iconHeart from '../../assets/icons/coeur.png';
import iconX from '../../assets/icons/x.png';
import iconModify from '../../assets/icons/Icon-modify.png';

const Allergies = ({ allergiesData }) => {
  return (
    <div className="allergies-container">
      <div className="allergies-header">
        <div className="header-left">
          <img src={iconAllergies} alt="Allergies" className="allergies-icon" />
          <span className="allergies-text">Allergies</span>
          <img src={iconVaccination} alt="Vaccination" className="vaccination-icon" />
          <span className="vaccination-text">Vaccination Record</span>
        </div>
        <img src={iconModify} alt="Modify" className="modify-icon" />
      </div>

      <div className="allergies-content">
        <p className="allergies-description">List of relatives + condition in neat rows</p>

        <div className="grandfather-container">
          <div className="grandfather-text">
            <img src={iconHeart} alt="Heart" className="heart-icon" />
            Grandfather (paternal): Heart disease
          </div>
        </div>

        <div className="other-notes-container">
          <div className="other-notes-text">
            <img src={iconX} alt="X" className="x-icon" />
            Other Notes: No known genetic disorders
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allergies;
