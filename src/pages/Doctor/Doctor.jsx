import React from 'react';
import { useLocation } from 'react-router-dom';
import './Doctor.css';

// Import du Layout
import AppLayout from '../../navigation/Layout';

// Import des composants
import PatientRecord from '../../components/PatientRecord/PatientRecord';
import Feed from '../../components/HomePage/Feed/Feed';

const Doctor = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Fonction pour déterminer quel composant afficher basé sur l'URL
  const renderContent = () => {
    // Si l'URL est "/Home", afficher le Feed
    if (pathname === '/Home') {
      return <Feed />;
    }

    // Si l'URL est "/profile" ou route par défaut
    if (pathname === '/profile' || pathname === '/doctor') {
      return <PatientRecord />;
    }

    // Si l'URL est "/appointments"
    if (pathname === '/appointments') {
      return (
        <div className="appointments-placeholder">
          <h2>Appointments</h2>
          <p>Appointments content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/patients"
    if (pathname === '/patients') {
      return (
        <div className="patients-placeholder">
          <h2>Patients</h2>
          <p>Patients list will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/messages"
    if (pathname === '/messages') {
      return (
        <div className="messages-placeholder">
          <h2>Messages</h2>
          <p>Messages content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/availability"
    if (pathname === '/availability') {
      return (
        <div className="availability-placeholder">
          <h2>Availability</h2>
          <p>Availability content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/pharmacy"
    if (pathname === '/pharmacy') {
      return (
        <div className="pharmacy-placeholder">
          <h2>Pharmacy</h2>
          <p>Pharmacy content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/clinics"
    if (pathname === '/clinics') {
      return (
        <div className="clinics-placeholder">
          <h2>Clinics</h2>
          <p>Clinics content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/analysis-lab"
    if (pathname === '/analysis-lab') {
      return (
        <div className="analysis-lab-placeholder">
          <h2>Analysis Lab</h2>
          <p>Analysis Lab content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/nurses"
    if (pathname === '/nurses') {
      return (
        <div className="nurses-placeholder">
          <h2>Nurses</h2>
          <p>Nurses content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/medical-questions"
    if (pathname === '/medical-questions') {
      return (
        <div className="medical-questions-placeholder">
          <h2>Medical Questions</h2>
          <p>Medical Questions content will be implemented here</p>
        </div>
      );
    }

    // Si l'URL est "/settings"
    if (pathname === '/settings') {
      return (
        <div className="settings-placeholder">
          <h2>Settings</h2>
          <p>Settings content will be implemented here</p>
        </div>
      );
    }

    // Par défaut, afficher PatientRecord
    return <PatientRecord />;
  };

  return (
    <AppLayout>
      {/* Page Content */}
      <div className="page-content">
        {renderContent()}
      </div>
    </AppLayout>
  );
};

export default Doctor;