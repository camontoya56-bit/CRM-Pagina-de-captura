
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.tsx';
import ThankYouPage from './components/ThankYouPage.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gracias" element={<ThankYouPage />} />
    </Routes>
  );
};

export default App;
