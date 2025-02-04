import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import awesomeitLogo from '../assets/images/awesomeit_logo.png';
import visionConnectedCar from '../assets/images/vision-connected-car.jpg';
import knoxImage from '../assets/images/Knox_jpg-1024x760.jpg';
import engineeringImage from '../assets/images/pexels-thisisengineering-3862610.jpg';
import carImage from '../assets/images/pexels-cottonbro-8088493.jpg';
import whyAwesomeitImage from '../assets/images/whyawesomeit.png';
import companyIntroImage from '../assets/images/companyintroduction.png';
import certificationImage from '../assets/images/certificationimage.png';
/* 이미지 import - 추후 추가 예정
import top02Image from '../assets/images/top_02.png';
import partnersImage from '../assets/images/협력사2.png';
*/

const CompanyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "B2B Mobile Customized",
      subtitle: "모바일 런처 l 모바일 에이전트",
      description: "삼성전자 KNOX 기반 맞춤형 단말관리 솔루션\nMDM(Mobile Device Management)",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1920&auto=format&fit=crop"
    },
    {
      title: "CAR-DATA Business",
      subtitle: "어썸커넥트 l 데이터바우처",
      description: "자동차 데이터 분석 기술 l 데이터바우처 공급 사업",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  const changeSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setNextSlide(index);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  // 자동 슬라이드 기능
  useEffect(() => {
    if (isTransitioning) return;
    
    const timer = setInterval(() => {
      const nextIndex = (currentSlide + 1) % slides.length;
      changeSlide(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning, slides.length]);

  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToEMM = () => {
    navigate('/emm');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - 높이 지정 */}
      <header className="h-20 bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-6 max-w-7xl h-full">
          <div className="flex items-center justify-between h-full">
            <img
              src={awesomeitLogo}
              alt="어썸잇 로고"
              className="h-16 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={goToHome}
            />
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <button
                    onClick={() => scrollToSection('vision')}
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    비전
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('solutions')}
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    솔루션
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('why-awesomeit')}
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    Why Awesomeit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('company')}
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    회사소개
                  </button>
                </li>
                <li>
                  <button
                    onClick={goToEMM}
                    className="text-gray-600 hover:text-blue-600 font-medium"
                  >
                    EMM
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content - 헤더 높이만큼 상단 패딩 추가 */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative text-white h-[500px] overflow-hidden">
          {/* Slides */}
          <div className="absolute inset-0 w-full h-full">
            {/* Current Slide */}
            <div className="absolute inset-0 w-full h-full" style={{ display: isTransitioning ? 'none' : 'block' }}>
              <div className="absolute inset-0">
                <img
                  src={slides[currentSlide].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="container mx-auto px-6 max-w-7xl h-full flex flex-col relative z-10">
                <div className="max-w-3xl mt-32">
                  <h1 className="text-6xl font-bold mb-6">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-2xl mb-4">
                    {slides[currentSlide].subtitle}
                  </p>
                  <p className="text-xl whitespace-pre-line">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
            {/* Next Slide */}
            <div className="absolute inset-0 w-full h-full" style={{ display: isTransitioning ? 'block' : 'none' }}>
              <div className="absolute inset-0">
                <img
                  src={slides[nextSlide].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="container mx-auto px-6 max-w-7xl h-full flex flex-col relative z-10">
                <div className="max-w-3xl mt-32">
                  <h1 className="text-6xl font-bold mb-6">
                    {slides[nextSlide].title}
                  </h1>
                  <p className="text-2xl mb-4">
                    {slides[nextSlide].subtitle}
                  </p>
                  <p className="text-xl whitespace-pre-line">
                    {slides[nextSlide].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Navigation Dots */}
          <div className="container mx-auto px-6 max-w-7xl h-full flex flex-col relative z-10">
            <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12">비전</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="max-w-4xl">
                <p className="text-xl leading-relaxed mb-8">
                  우리는 모바일 소프트웨어와<br />
                  자동차 데이터 분석 기술로<br />
                  세상을 연결합니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  국내외 교육·금융·운송·헬스케어 등<br />
                  약 100여 개의 리딩 기업과 파트너쉽을 맺고,<br />
                  모바일 소프트웨어를 개발·운영하고 있습니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  또한 차세대 성장동력인<br />
                  자동차 전자신호 분석기술을 보유하고 있어<br />
                  전문 모빌리티 기업들과<br />
                  데이터 생태계를 함께 연구·개발하고 있습니다.
                </p>
              </div>
              {/* Vision Section Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <img
                  src={visionConnectedCar}
                  alt="Connected Car Vision"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12">SOLUTION ㅣ SERVICES</h2>
            <p className="text-xl mb-16">
              소프트웨어는 만드는 것보다<br />
              관리가 더 중요합니다.
            </p>

            {/* Mobile Launcher Solution */}
            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  모바일 런처 l<br />
                  모바일 에이전트
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  어썸홈(런처, MDM)은<br />
                  삼성전자 스마트 기기에 탑재되어 있는<br />
                  비즈니스 보안 솔루션 녹스(Knox)를 기반으로<br />
                  B2B 맞춤형 UI/UX를 제공합니다.<br />
                  (배경화면 변경, 기본 설정 변경, 보안 강화 등)
                </p>
                <p className="text-lg mb-8">
                  우리 회사의 비즈니스 플랫폼을 시작해 보세요.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  더보기
                </button>
              </div>
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={knoxImage}
                  alt="Knox"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Car Data Solution */}
            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={engineeringImage}
                  alt="Engineering"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  자동차 실시간<br />
                  데이터 분석 l 솔루션
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  어썸커넥트는 자동차의 뇌언어라고 할 수 있는<br />
                  전자제어신호(CAN) 분석기술을 갖고 있습니다.<br />
                  우리는 B2B 기업들의<br />
                  자율주행 보조시스템, 전기자동차 배터리 검증,<br />
                  주행/주차 보조제어 등을 함께 만들어 갑니다.
                </p>
                <p className="text-2xl font-bold mb-8">Next Generation</p>
                <p className="text-lg mb-8">
                  전기자동차가 만드는 새로운 생태계를<br />
                  어썸잇과 함께 만들어 보세요.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  더보기
                </button>
              </div>
            </div>

            {/* My Car Data Service */}
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  마이카 데이터 서비스
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  마이카 데이터 서비스 '카피치'는<br />
                  내 차와 연결된 정보를 분석하여<br />
                  운전자에게 도움을 주는<br />
                  인공지능(AI) 음성 서비스입니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  카피치는 현재 베타 테스트 중으로<br />
                  음성 처리 및 UI/UX 검증 단계입니다.<br />
                  앞으로 음성 간편 결재, 급발진<br />
                  및 보험 데이터 수집(OBD-Ⅱ 활용) 등<br />
                  다양한 분야에서 활용될 수 있도록 준비합니다.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  더보기
                </button>
              </div>
              <div className="h-[400px] overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={carImage}
                  alt="Car Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Awesomeit Section */}
        <section id="why-awesomeit" className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12">WHY AWESOMEIT</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  우리가 만든 제품을<br />
                  전세계 127만명의 사람들이<br />
                  이용하고 있습니다.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  모바일 소프트웨어의 세계에서는<br />
                  수십 번의 고민을 정리한 기획과<br />
                  전체 그림을 연결하는 코드 한 줄의 차이로<br />
                  고객은 제품을 선택합니다.
                </p>
                <p className="text-lg mb-8">
                  우리의 제품은 언제나 최선이었습니다.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  회사 소개서 다운로드
                </button>
              </div>
              <div className="h-[500px] overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={whyAwesomeitImage}
                  alt="Why Awesomeit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Introduction Section */}
        <section id="company" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="h-[600px] overflow-hidden rounded-lg">
                <img 
                  src={companyIntroImage}
                  alt="Company Introduction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="mb-16">
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">COMPANY INTRODUCTION</p>
                  <h2 className="text-4xl font-bold mb-4">회사 개요</h2>
                </div>

                <div className="grid grid-cols-2 gap-x-16 gap-y-12">
                  <div>
                    <p className="text-4xl font-bold mb-2">172%</p>
                    <p className="text-sm text-gray-600">Growth in Billing</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2">75%</p>
                    <p className="text-sm text-gray-600">Average Repurchase Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2">1개국</p>
                    <p className="text-sm text-gray-600">Global Edutech Export</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-2">40%</p>
                    <p className="text-sm text-gray-600">Repeatable SW Revenue<br />Contribution</p>
                  </div>
                </div>

                <div className="mt-16">
                  <img 
                    src={certificationImage}
                    alt="Certifications"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">(주)어썸잇</h3>
              <ul className="space-y-2 text-gray-600">
                <li>대표이사: 유병규</li>
                <li>개인정보관리 책임자: 손정열</li>
                <li>사업자등록번호: 276-88-01002</li>
                <li>통신판매신고: 2024-서울금천-1220호</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>문의: 02-856-0604</li>
                <li>이메일: sales-support@awesomeit.co.kr</li>
                <li>주소: 서울시 금천구 가산디지털1로 225, 1015호</li>
                <li>(가산동, 에이스가산포휴)</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            © 2018 by AWESOMEIT. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyPage; 