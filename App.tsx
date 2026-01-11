
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gracias" element={<ThankYouPage />} />
    </Routes>
  );
};

export default App;
