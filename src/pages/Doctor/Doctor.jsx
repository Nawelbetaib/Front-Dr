import React, { useState } from 'react';
import './Doctor.css';

// Import du Layout
import AppLayout from '../../navigation/Layout';

// Import du composant principal PatientRecord
import PatientRecord from '../../components/PatientRecord/PatientRecord';

const Doctor = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('profile');

  return (
    <AppLayout>
      {/* Page Content */}
      <div className="page-content">
        {activeMenuItem === 'profile' && <PatientRecord />}

        {activeMenuItem === 'Home' && (
          <div className="Home-placeholder">
            <h2>Home</h2>
            <p>Dashboard content will be implemented here</p>
          </div>
        )}

        {activeMenuItem === 'appointments' && (
          <div className="appointments-placeholder">
            <h2>Appointments</h2>
            <p>Appointments content will be implemented here</p>
          </div>
        )}

        {activeMenuItem === 'patients' && (
          <div className="patients-placeholder">
            <h2>Patients</h2>
            <p>Patients list will be implemented here</p>
          </div>
        )}

        {/* Placeholder pour les autres sections */}
        {!['profile', 'dashboard', 'appointments', 'patients'].includes(activeMenuItem) && (
          <div className="default-placeholder">
            <h2>{activeMenuItem.charAt(0).toUpperCase() + activeMenuItem.slice(1)}</h2>
            <p>This section is under development</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Doctor;