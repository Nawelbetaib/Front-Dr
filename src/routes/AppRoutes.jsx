import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import des pages
import Doctor from '../pages/Doctor/Doctor';

// Import des chemins de routes
import { ROUTE_PATHS } from './routePaths';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Route par défaut - redirige vers Doctor */}
      <Route path={ROUTE_PATHS.HOME} element={<Navigate to={ROUTE_PATHS.DOCTOR} replace />} />

      {/* Route principale Doctor */}
      <Route path={ROUTE_PATHS.DOCTOR} element={<Doctor />} />

      {/* Routes Doctor avec sous-chemins (pour navigation future) */}
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

      {/* Route 404 - toute route non trouvée redirige vers Doctor */}
      <Route path="*" element={<Navigate to={ROUTE_PATHS.DOCTOR} replace />} />
    </Routes>
  );
};

export default AppRoutes;