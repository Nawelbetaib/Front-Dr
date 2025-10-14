import React, { useState } from 'react';
import './PatientRecord.css';

// Import de l'icône print
import printIcon from '../../assets/icons/Print.png';
// Import de l'icône plus
import plusIcon from '../../assets/icons/plus.png';

// Import des composants de profil
import GeneralInformations from '../Profile/GeneralInformations';
import Insurance from '../Profile/Insurance';
import EmergencyContact from '../Profile/EmergencyContact';
import PatientCard from '../Profile/PatientCard';

// Import des composants de rapports médicaux
import TestReports from '../TestReports/TestReports';
import Previous from '../Previous/Previous';
import Allergies from '../Allergies/Allergies';
import Past from '../Past/Past';

// Import du composant AddNewConsultation
import AddNewConsultation from '../AddNewConsultation/AddNewConsultation';

// Import du composant FollowUpVisitPopup
import FollowUpVisitPopup from '../AddNewConsultation/FollowUpVisitPopup/FollowUpVisitPopup';

// Import du composant SuccessNotification
import SuccessNotification from '../AddNewConsultation/SuccessNotification/SuccessNotification';

const PatientRecord = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = useState(false);
  const [isFollowUpPopupOpen, setIsFollowUpPopupOpen] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // Fonction pour ouvrir la popup AddNewConsultation
  const handleOpenConsultationPopup = () => {
    setIsConsultationPopupOpen(true);
  };

  // Fonction pour fermer la popup AddNewConsultation
  const handleCloseConsultationPopup = () => {
    setIsConsultationPopupOpen(false);
  };

  // Fonction pour gérer le Print Record depuis AddNewConsultation
  const handlePrintRecordFromConsultation = () => {
    // Fermer AddNewConsultation
    setIsConsultationPopupOpen(false);
    // Ouvrir FollowUpVisit
    setIsFollowUpPopupOpen(true);
    // Afficher la notification de succès
    setShowSuccessNotification(true);

    // Masquer la notification après 5 secondes
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 5000);
  };

  // Fonction pour gérer le Print Record depuis PatientRecord (impression simple)
  const handlePrintPatientRecord = () => {
    // Ajouter la date d'impression
    const printDate = new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Ajouter l'attribut data pour la date dans le CSS
    const container = document.querySelector('.patient-record-container');
    if (container) {
      container.setAttribute('data-print-date', printDate);
    }

    // Attendre un peu pour que les styles soient appliqués puis imprimer
    setTimeout(() => {
      window.print();
    }, 100);
  };

  // Fonction pour fermer la popup FollowUpVisit
  const handleCloseFollowUpPopup = () => {
    setIsFollowUpPopupOpen(false);
  };

  // Fonction pour gérer la recommandation de visite de suivi
  const handleRecommendFollowUp = () => {
    console.log('Follow-up visit recommended');
    // Ici vous pouvez ajouter la logique pour sauvegarder la recommandation
  };

  // Données exemple pour le patient
  const patientData = {
    
    name: 'Ines Ben Youssef',
    phone: '+216 22 345 678',
    email: 'ines.benyoussef@example.com',
    profileImage: '/api/placeholder/80/80',
    gender: 'Female',
    bloodType: 'O+',
    height: '1.65 Cm',
    weight: '56 Kg',
    diseases: 'Blood pressure',
    latestVisit: '28-03-2025'
  };

  const insuranceData = {
    company: 'CNAM Caisse Nationale d\'Assurance Maladie',
    policyNumber: '54872936'
  };

  const emergencyData = {
    name: 'Karim Ben Youssef (Brother)',
    phone: '+216 52 987 654'
  };

  const testData = {
    testName: 'Blood Test Results',
    date: '20 August 2025',
    fileSize: '4 MB'
  };

  return (
    <div className="patient-record-container">
      {/* Header avec informations patient */}
      <div className="header-content">
        <div className="patient-info-section">
          <h2>Patient Record</h2>
          <p>All essential patient information in one place</p>
        </div>
        <div className="header-actions">
          <button className="add-consultation-btn" onClick={handleOpenConsultationPopup}>
            <img src={plusIcon} alt="Plus" className="plus-icon" />
            <span className="btn-text">Add New Consultation</span>
          </button>
          <button className="print-record-btn" onClick={handlePrintPatientRecord}>
            <img src={printIcon} alt="Print" className="print-icon" />
            <span className="btn-text">Print Record</span>
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="patient-record-content">
        {/* Section gauche - Profil patient */}
        <div className="patient-profile-section">
          <PatientCard patientData={patientData} />

          {/* Composants de profil */}
          <GeneralInformations patientData={patientData} />
          <Insurance insuranceData={insuranceData} />
          <EmergencyContact emergencyData={emergencyData} />
        </div>

        {/* Section droite - Rapports et historique médical */}
        <div className="medical-reports-section">
          <TestReports testData={testData} />
          <Previous />
          <div className="allergies-past-container">
            <Allergies />
            <Past />
          </div>
        </div>
      </div>

      {/* Popup Add New Consultation */}
      <AddNewConsultation
        isOpen={isConsultationPopupOpen}
        onClose={handleCloseConsultationPopup}
        onPrintRecord={handlePrintRecordFromConsultation}
        patientData={patientData}
        insuranceData={insuranceData}
        emergencyData={emergencyData}
      />

      {/* Popup FollowUpVisit - S'affiche après Print Record */}
      <FollowUpVisitPopup
        isOpen={isFollowUpPopupOpen}
        onClose={handleCloseFollowUpPopup}
        onRecommendFollowUp={handleRecommendFollowUp}
      />

      {/* Notification de succès - S'affiche avec FollowUpVisit pendant 5 secondes */}
      <SuccessNotification isVisible={showSuccessNotification} />
    </div>
  );
};

export default PatientRecord;