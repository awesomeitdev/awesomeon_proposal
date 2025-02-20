import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import awesomeitLogo from '../assets/images/awesomeit_logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 메뉴 상태에 따라 body 스크롤 제어
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

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
    setIsMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/emm');
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const goToCompany = () => {
    navigate('/company');
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const goToEMM = () => {
    navigate('/emmintroduce');
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const goToFAQ = () => {
    navigate('/faq');
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const goToContact = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfodzPClwTO9-DUORIfJgg6S0Or2mXXC8Gsh1fM1Z243PCYHQ/viewform?usp=header', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <header className="h-20 bg-white shadow-sm fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl h-full">
        <div className="flex items-center justify-between h-full">
          <img 
            src={awesomeitLogo}
            alt="Awesomeit Logo" 
            className="h-12 sm:h-16 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={goToHome}
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <button 
              onClick={goToEMM}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {t('header.awesomeone')}
            </button>
            <button 
              onClick={goToFAQ}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {t('header.faq')}
            </button>
            <button 
              onClick={goToContact}
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {t('header.contact')}
            </button>
            <a 
              href="https://www.awesomeit.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              {t('header.company')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 md:hidden overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={goToEMM}
              className="text-gray-600 hover:text-blue-600 font-medium py-3 text-lg text-left"
            >
              {t('header.awesomeone')}
            </button>
            <button 
              onClick={goToFAQ}
              className="text-gray-600 hover:text-blue-600 font-medium py-3 text-lg text-left"
            >
              {t('header.faq')}
            </button>
            <button 
              onClick={goToContact}
              className="text-gray-600 hover:text-blue-600 font-medium py-3 text-lg text-left"
            >
              {t('header.contact')}
            </button>
            <a 
              href="https://www.awesomeit.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 font-medium py-3 text-lg text-left"
            >
              {t('header.company')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 