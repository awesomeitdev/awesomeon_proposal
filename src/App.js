import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 import
const EMMPage = React.lazy(() => import('./pages/EMM'));
const CompanyPage = React.lazy(() => import('./pages/CompanyPage'));
const EMMintroducePage = React.lazy(() => import('./pages/EMMintroduce'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const TermsPage = React.lazy(() => import('./pages/Terms'));

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"></div>}>
      <Routes>
        <Route path="/" element={<EMMPage />} />
        <Route path="/emm" element={<EMMPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/emmintroduce" element={<EMMintroducePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App; 