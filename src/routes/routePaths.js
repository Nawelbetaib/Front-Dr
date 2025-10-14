// Route paths for the application
export const ROUTE_PATHS = {
  // Main routes
  HOME: '/',
  DOCTOR: '/doctor',

  // Doctor sub-routes
  DOCTOR_DASHBOARD: '/doctor/dashboard',
  DOCTOR_PROFILE: '/doctor/profile',
  DOCTOR_PATIENTS: '/doctor/patients',
  DOCTOR_APPOINTMENTS: '/doctor/appointments',
  DOCTOR_MESSAGES: '/doctor/messages',
  DOCTOR_PHARMACY: '/doctor/pharmacy',
  DOCTOR_CLINICS: '/doctor/clinics',
  DOCTOR_ANALYSIS: '/doctor/analysis',
  DOCTOR_NURSES: '/doctor/nurses',
  DOCTOR_QUESTIONS: '/doctor/questions',
  DOCTOR_AVAILABILITY: '/doctor/availability',
  DOCTOR_SETTINGS: '/doctor/settings',

  // Patient routes (for future implementation)
  PATIENT: '/patient',
  PATIENT_DASHBOARD: '/patient/dashboard',
  PATIENT_APPOINTMENTS: '/patient/appointments',
  PATIENT_RECORDS: '/patient/records',

  // Auth routes (for future implementation)
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Other routes
  NOT_FOUND: '/404',
  UNAUTHORIZED: '/unauthorized'
};

export default ROUTE_PATHS;

// Routes pour la SideBar (compatibilité avec le nouveau code)
export const ROUTES = {
  FEED: (userId) => `/feed/${userId}`,
  PROFILE: (userId) => `/profile/${userId}`,
  APPOINTMENTS: "/appointments",
  MESSAGING: "/messaging",
  DOCTORS: "/doctors",
  PHARMACY: "/pharmacy",
  CLINIQUE: "/clinique",
  LAB: "/lab",
  INFIRMARIES: "/infirmaries",
  KINE: "/kine"
};