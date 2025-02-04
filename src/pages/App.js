import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EMMSolutionPage from './pages/EMM';
import CompanyPage from './pages/CompanyPage';
import EMMintroduce from './pages/EMMintroduce';
import FAQ from './pages/FAQ';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EMMSolutionPage />} />
        <Route path="/emm" element={<EMMSolutionPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/emmintroduce" element={<EMMintroduce />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App; 