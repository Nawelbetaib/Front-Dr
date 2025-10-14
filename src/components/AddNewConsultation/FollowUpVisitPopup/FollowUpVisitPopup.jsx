import React from 'react';
import './FollowUpVisitPopup.css';

const FollowUpVisitPopup = ({ isOpen, onClose, onRecommendFollowUp }) => {
  if (!isOpen) return null;

  const handleRecommendFollowUp = () => {
    if (onRecommendFollowUp) {
      onRecommendFollowUp();
    }
    onClose();
  };

  return (
    <div className="followup-popup-overlay">
      <div className="followup-popup-container">
        {/* Bouton de fermeture */}
        <button className="followup-close-btn" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="black" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="black" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Titre */}
        <h2 className="followup-title">Follow-up visit</h2>

        {/* Description */}
        <p className="followup-description">
          Would you recommend a follow-up visit, or should the patient only return if symptoms worsen?
        </p>

        {/* Bouton d'action */}
        <button className="followup-recommend-btn" onClick={handleRecommendFollowUp}>
          <span className="followup-recommend-text">recommend a follow-up visit</span>
        </button>
      </div>
    </div>
  );
};

export default FollowUpVisitPopup;
