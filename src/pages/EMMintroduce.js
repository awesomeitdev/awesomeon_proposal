import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import awesomeitLogo from '../assets/images/awesomeit_logo.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EMMIntroduce = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  React.useEffect(() => {
    i18n.changeLanguage('ko');
  }, [i18n]);

  const goToHome = () => {
    navigate('/emm');
    window.scrollTo(0, 0);
  };

  const goToCompany = () => {
    navigate('/company');
    window.scrollTo(0, 0);
  };

  const goToEMM = () => {
    navigate('/emmintroduce');
    window.scrollTo(0, 0);
  };

  const goToFAQ = () => {
    navigate('/faq');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Main Content */}
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
            <h1 className="text-4xl font-bold mb-8">AwesomeONE 소개</h1>
            
            {/* EMM 개요 섹션 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">EMM이란?</h2>
              <p className="text-lg text-gray-600 mb-4">
                EMM(Enterprise Mobility Management)은 기업 내 모바일 기기와 애플리케이션, 콘텐츠를 통합적으로 관리하는 솔루션입니다. 
                직원들의 모바일 기기 사용을 효율적으로 관리하고, 기업 데이터를 안전하게 보호하는 것이 주요 목적입니다.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                EMM은 기기 프로비저닝을 통해 기업의 모바일 기기를 체계적으로 관리합니다. 기기 등록부터 앱 설치, 보안 정책 적용까지 
                전체 라이프사이클을 자동화하여 관리함으로써, IT 관리자의 업무 부담을 줄이고 기업의 보안을 강화합니다.
              </p>
            </div>

            {/* 프로비저닝 설명 섹션 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">프로비저닝이란?</h2>
              <p className="text-lg text-gray-600 mb-4">
                프로비저닝은 기업의 모바일 기기를 자동으로 설정하고 관리하는 프로세스입니다. 
                기기 등록, 앱 설치, 보안 정책 적용, 네트워크 설정 등을 자동화하여 IT 관리자의 업무 효율성을 크게 향상시킵니다.
              </p>
            </div>

            {/* EMM 필요성 섹션 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">EMM이 필요한 상황</h2>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
                <li>원격/하이브리드 근무 환경에서 직원들의 모바일 기기 관리가 필요할 때</li>
                <li>기업의 중요 데이터를 모바일 환경에서 안전하게 보호해야 할 때</li>
                <li>다수의 임직원 모바일 기기를 효율적으로 관리해야 할 때</li>
                <li>BYOD(개인 기기 업무 활용) 정책을 도입하고자 할 때</li>
                <li>모바일 보안 규정 준수가 필요한 경우</li>
              </ul>
            </div>

            {/* 어썸잇 EMM 특장점 섹션 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">AwesomeONE 특장점</h2>
              <p className="text-lg text-gray-600 mb-6">
                AwesomeONE은 IT 관리자의 편의성과 솔루션 신뢰성이라는 두 마리 토끼를 모두 잡은 혁신적인 솔루션입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">IT 관리자 편의성</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>직관적인 관리자 대시보드</li>
                    <li>자동화된 기기 등록 및 설정</li>
                    <li>실시간 모니터링 및 원격 지원</li>
                    <li>간편한 정책 설정 및 배포</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">솔루션 신뢰성</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>강력한 보안 기능</li>
                    <li>안정적인 시스템 운영</li>
                    <li>검증된 기술력</li>
                    <li>24/7 기술 지원</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EMMIntroduce; 