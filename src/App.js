import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LegalPage from './pages/LegalPage';
import TermsPage from './pages/TermsPage';
import WoodMaterialPage from './pages/WoodMaterialPage';
import HuanghualiDetailPage from './pages/HuanghualiDetailPage';
import Layout from './components/Layout';
import AIIdentification from './pages/AIIdentification';

function AppContent() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/knowledge/material/wood" element={<WoodMaterialPage />} />
          <Route path="/knowledge/material/wood/huanghuali" element={<HuanghualiDetailPage />} />
          <Route path="/support/ai-identification" element={<AIIdentification />} />
        </Routes>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App; 