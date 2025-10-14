import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Import des routes
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
