import React, { useEffect, useState } from 'react';
import './AddNewConsultation.css';

// Import des composants du patient record
import GeneralInformations from '../Profile/GeneralInformations';
import Insurance from '../Profile/Insurance';
import EmergencyContact from '../Profile/EmergencyContact';
import PatientCard from '../Profile/PatientCard';

// Import de l'icône modify
import modifyIcon from '../../assets/icons/Icon-modify.png';

// Import des étapes
import ConsultationDetails from './/ConsultationDetails/ConsultationDetails';
import MedicalHistory from './MedicalHistory/MedicalHistory';
import PhysicalExamination from './PhysicalExamination/PhysicalExamination';
import TreatmentPlan from './TreatmentPlan/TreatmentPlan';

// Import du composant DocumentPreview
import DocumentPreview from './DocumentPreview/DocumentPreview';



const AddNewConsultation = ({ isOpen, onClose, onPrintRecord, patientData, insuranceData, emergencyData }) => {
  // État pour gérer l'étape actuelle
  const [currentStep, setCurrentStep] = useState(1);

  // État pour gérer le contenu de l'ordonnance
  const [prescriptionContent, setPrescriptionContent] = useState('');



  // Gérer le background fixe quand la popup est ouverte
  useEffect(() => {
    if (isOpen) {
      // Fixer le background
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      // Réinitialiser à l'étape 1 quand la popup s'ouvre
      setCurrentStep(1);
    } else {
      // Restaurer le background normal
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      // Vider le contenu de l'ordonnance quand la popup se ferme
      setPrescriptionContent('');
    }

    // Cleanup function pour restaurer les styles quand le composant se démonte
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Fonctions de navigation entre les étapes
  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);

      // Scroll automatique vers le haut - plusieurs méthodes pour assurer le fonctionnement
      setTimeout(() => {
        // Méthode 1: Scroll de l'overlay
        const popupOverlay = document.querySelector('.consultation-popup-overlay');
        if (popupOverlay) {
          popupOverlay.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }

        // Méthode 2: Scroll du body en fallback
        document.body.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        // Méthode 3: Scroll de la fenêtre en fallback
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);

      // Scroll automatique vers le haut - plusieurs méthodes pour assurer le fonctionnement
      setTimeout(() => {
        // Méthode 1: Scroll de l'overlay
        const popupOverlay = document.querySelector('.consultation-popup-overlay');
        if (popupOverlay) {
          popupOverlay.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }

        // Méthode 2: Scroll du body en fallback
        document.body.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        // Méthode 3: Scroll de la fenêtre en fallback
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  // Fonction pour gérer le clic sur Print Record
  const handlePrintRecordClick = () => {
    if (onPrintRecord) {
      onPrintRecord();
    }
  };



  const handleComplete = () => {
    // Logique pour terminer la consultation
    console.log('Consultation completed');
    onClose();
  };

  // Fonction pour rendre l'étape actuelle (étapes 1-3 seulement, l'étape 4 est gérée séparément)
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ConsultationDetails onNextStep={handleNextStep} currentStep={currentStep} />;
      case 2:
        return <MedicalHistory onNextStep={handleNextStep} onPrevStep={handlePrevStep} currentStep={currentStep} />;
      case 3:
        return <PhysicalExamination onNextStep={handleNextStep} onPrevStep={handlePrevStep} currentStep={currentStep} />;
      default:
        return <ConsultationDetails onNextStep={handleNextStep} currentStep={currentStep} />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-popup-overlay" onClick={onClose}>
      <div className="consultation-popup-container" onClick={(e) => e.stopPropagation()}>

        {/* Header Container */}
        <div className="consultation-header-container">
          <h1 className="consultation-titlle">Add New Consultation</h1>
          <p className="consultation-description">
            Document the patient's visit with symptoms, history, treatment, and follow-up.
          </p>
        </div>

        {/* Main Content Container */}
        <div className={`consultation-content-container ${currentStep === 4 ? 'step4-inverted' : ''}`}>

          {currentStep === 4 ? (
            // À l'étape 4 : Switch des containers
            <>
              {/* Container gauche : TreatmentPlan dans le container basic-patient-info-section */}
              <div className="basic-patient-info-section">
                <TreatmentPlan
                  onComplete={handleComplete}
                  onPrevStep={handlePrevStep}
                  currentStep={currentStep}
                  onSavePrescription={setPrescriptionContent}
                />
              </div>

              {/* Container droite : DocumentPreview dans le container consultation-details-section */}
              <div className="consultation-details-section">
                <DocumentPreview
                  prescriptionContent={prescriptionContent}
                  onPrintRecord={handlePrintRecordClick}
                />
              </div>
            </>
          ) : (
            // Étapes 1-3 : Configuration normale
            <>
              {/* Basic Patient Information Section */}
              <div className="basic-patient-info-section">
                <div className="basic-patient-header">
                  <h2 className="basic-patient-title">Basic Patient Information</h2>
                  <button className="edit-patient-btn">
                    <img src={modifyIcon} alt="Modify" />
                  </button>
                </div>

                {/* Patient Record Content */}
                <div className="patient-record-content-popup">
                  <div className="patient-profile-section-popup">
                    <PatientCard patientData={patientData} />
                    <GeneralInformations patientData={patientData} />
                    <Insurance insuranceData={insuranceData} />
                    <EmergencyContact emergencyData={emergencyData} />
                  </div>
                </div>
              </div>

              {/* Consultation Details Section */}
              <div className="consultation-details-section">
                {renderCurrentStep()}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewConsultation;