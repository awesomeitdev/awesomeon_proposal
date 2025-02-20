import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// 동적 임포트 에러 처리 추가
const lazyLoad = (importFunc) => {
  return React.lazy(() =>
    importFunc.catch(error => {
      console.error('Chunk load error:', error);
      return { default: () => <div>페이지를 불러오는데 실패했습니다.</div> };
    })
  );
};

// 동적 임포트 변경
const EMMPage = lazyLoad(import('./pages/EMM'));
const CompanyPage = lazyLoad(import('./pages/CompanyPage'));
const EMMintroducePage = lazyLoad(import('./pages/EMMintroduce'));
const FAQPage = lazyLoad(import('./pages/FAQ'));
const ContactPage = lazyLoad(import('./pages/ContactPage'));
const TermsPage = lazyLoad(import('./pages/Terms'));

// ErrorBoundary 컴포넌트
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>페이지를 불러오는 중 문제가 발생했습니다.</div>;
    }
    return this.props.children;
  }
}

// 로딩 컴포넌트
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="text-center">
    </div>
  </div>
);

// 레이아웃 컴포넌트
const Layout = ({ children }) => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// 라우트 컴포넌트
const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <EMMPage />
          </Suspense>
        }
      />
      <Route
        path="/emm"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <EMMPage />
          </Suspense>
        }
      />
      <Route
        path="/company"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <CompanyPage />
          </Suspense>
        }
      />
      <Route
        path="/emmintroduce"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <EMMintroducePage />
          </Suspense>
        }
      />
      <Route
        path="/faq"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <FAQPage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ContactPage />
          </Suspense>
        }
      />
      <Route
        path="/terms"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <TermsPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <AppRoutes />
      </Layout>
    </ErrorBoundary>
  );
}

export default App; 