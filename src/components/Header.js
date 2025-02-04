import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import awesomeitLogo from '../assets/images/awesomeit_logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // 현재 /emm 페이지에 있는 경우 바로 스크롤
    if (location.pathname === '/emm') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 다른 페이지에 있는 경우 /emm 페이지로 이동 후 스크롤
      navigate(`/emm#${sectionId}`);
    }
  };

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

  const goToContact = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfodzPClwTO9-DUORIfJgg6S0Or2mXXC8Gsh1fM1Z243PCYHQ/viewform?usp=header', '_blank');
  };

  return (
    <>
      <style>
        {`
          body {
            overflow-y: scroll;
          }
        `}
      </style>
      <header className="h-20 bg-white shadow-sm fixed w-full z-50 top-0 left-0">
        <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl h-full">
          <div className="flex items-center justify-between h-full">
            <img 
              src={awesomeitLogo}
              alt="Awesomeit Logo" 
              className="h-16 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={goToHome}
            />
            <div className="flex gap-6">
              <button 
                onClick={goToEMM}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                AwesomeONE
              </button>
              <button 
                onClick={goToFAQ}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={goToContact}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                도입 문의
              </button>
              <a 
                href="https://www.awesomeit.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                회사 홈페이지
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 