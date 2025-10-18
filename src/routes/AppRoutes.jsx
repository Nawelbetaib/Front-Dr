import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import des pages
import Doctor from '../pages/Doctor/Doctor';

// Import des chemins de routes
import { ROUTE_PATHS } from './routePaths';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Route par défaut - redirige vers Home */}
      <Route path={ROUTE_PATHS.HOME} element={<Navigate to="/Home" replace />} />

      {/* Route principale Doctor - redirige vers Home */}
      <Route path={ROUTE_PATHS.DOCTOR} element={<Navigate to="/Home" replace />} />

      {/* Routes de navigation de la sidebar */}
      <Route path="/Home" element={<Doctor />} />
      <Route path="/profile" element={<Doctor />} />
      <Route path="/availability" element={<Doctor />} />
      <Route path="/appointments" element={<Doctor />} />
      <Route path="/messages" element={<Doctor />} />
      <Route path="/patients" element={<Doctor />} />
      <Route path="/pharmacy" element={<Doctor />} />
      <Route path="/clinics" element={<Doctor />} />
      <Route path="/analysis-lab" element={<Doctor />} />
      <Route path="/nurses" element={<Doctor />} />
      <Route path="/medical-questions" element={<Doctor />} />
      <Route path="/settings" element={<Doctor />} />

      {/* Routes Doctor avec sous-chemins (pour compatibilité) */}
      <Route path={ROUTE_PATHS.DOCTOR_DASHBOARD} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_PROFILE} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_PATIENTS} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_APPOINTMENTS} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_MESSAGES} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_PHARMACY} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_CLINICS} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_ANALYSIS} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_NURSES} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_QUESTIONS} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_AVAILABILITY} element={<Doctor />} />
      <Route path={ROUTE_PATHS.DOCTOR_SETTINGS} element={<Doctor />} />

      {/* Route 404 - toute route non trouvée redirige vers Home */}
      <Route path="*" element={<Navigate to="/Home" replace />} />
    </Routes>
  );
};

export default AppRoutes;