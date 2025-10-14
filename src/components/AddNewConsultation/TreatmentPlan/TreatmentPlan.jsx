import React, { useState } from 'react';
import ProgressSegment from '../ProgressSegment/ProgressSegment';
import { documentPlaceholders, documentTitles } from '../../../fakedata/documentPlaceholders';
import '../AddNewConsultation.css';
import './TreatmentPlan.css';

const TreatmentPlan = ({ onComplete, onPrevStep, currentStep, onSavePrescription }) => {
  // État pour gérer l'onglet de document sélectionné
  const [selectedDocumentType, setSelectedDocumentType] = useState('Prescription');

  // État pour gérer le contenu du textarea
  const [textareaContent, setTextareaContent] = useState('');

  // Fonction pour gérer le changement d'onglet
  const handleDocumentTypeChange = (documentType) => {
    setSelectedDocumentType(documentType);
    setTextareaContent(''); // Reset le contenu quand on change d'onglet
  };

  // Fonction pour gérer la sauvegarde
  const handleSaveInPatientFile = () => {
    if (onSavePrescription && textareaContent.trim()) {
      onSavePrescription(textareaContent);
      // Ne plus changer l'état isSaved - garder la couleur constante
    }
    // Ne pas appeler onComplete() - rester sur l'étape 4
  };
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
        <span className="consultation-step">Etape 4/4</span>
      </div>

      <p className="consultation-details-description">
        The process of finding what's wrong with your patient. It's a two-part system that provides clarity and direction for their care.
      </p>

      {/* Progress Segment */}
      <ProgressSegment currentStep={currentStep} />

      {/* Info Box */}
      <div className="info-box-step4">
        <div className="info-content-step4">
          <div className="info-icon-step4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M15 2.5H6C5.46957 2.5 4.96086 2.71071 4.58579 3.08579C4.21071 3.46086 4 3.96957 4 4.5V20.5C4 21.0304 4.21071 21.5391 4.58579 21.9142C4.96086 22.2893 5.46957 22.5 6 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V7.5L15 2.5Z" stroke="#F9B781" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9.5V13.5" stroke="#F9B781" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17.5H12.01" stroke="#F9B781" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="info-text-step4">
            The prescription section consistently displays the active medication, dosage, and frequency, even when a patient's treatment course is updated, ensuring you always see the current order.
          </div>
        </div>
      </div>

      {/* Document Selection */}
      <div className="document-selection-step4">
        <h4 className="document-selection-title-step4">Document selection</h4>
        <p className="document-selection-description-step4">
          Select the document type needed for your patient ( you can select more than one if needed )
        </p>

        <div className="document-tabs-step4">
          <button
            className={`document-tab-step4 ${selectedDocumentType === 'Prescription' ? 'active' : ''}`}
            onClick={() => handleDocumentTypeChange('Prescription')}
          >
            Prescription
          </button>
          <button
            className={`document-tab-step4 ${selectedDocumentType === 'Tests / Lab work' ? 'active' : ''}`}
            onClick={() => handleDocumentTypeChange('Tests / Lab work')}
          >
            Tests / Lab work
          </button>
          <button
            className={`document-tab-step4 ${selectedDocumentType === 'Referrals' ? 'active' : ''}`}
            onClick={() => handleDocumentTypeChange('Referrals')}
          >
            Referrals
          </button>
          <button
            className={`document-tab-step4 ${selectedDocumentType === 'Lifestyle advice' ? 'active' : ''}`}
            onClick={() => handleDocumentTypeChange('Lifestyle advice')}
          >
            Lifestyle advice
          </button>
        </div>
      </div>

      {/* Document Content */}
      <div className="prescribed-medications-step4">
        <h4 className="prescribed-medications-title-step4">
          {documentTitles[selectedDocumentType]}
        </h4>
        <textarea
          className="prescribed-medications-textarea-step4"
          placeholder={documentPlaceholders[selectedDocumentType]}
          value={textareaContent}
          onChange={(e) => setTextareaContent(e.target.value)}
          key={selectedDocumentType} // Force re-render when document type changes
        />
      </div>

      {/* Actions */}
      <div className="form-actions-step4">

        <button className="save-patient-file-btn-step4" onClick={handleSaveInPatientFile}>
          Save in patient file
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M5.5 12H19.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 5L19.5 12L12.5 19" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TreatmentPlan;
