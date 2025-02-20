import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-6 max-w-7xl py-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* 회사 정보 영역 */}
          <div className="flex-1 text-sm text-gray-600 md:mr-16">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>{t('footer.company.address')}</span>
              <span className="text-gray-400">|</span>
              <span>{t('footer.company.registration')}</span>
              <span className="text-gray-400">|</span>
              <span>{t('footer.company.ceo')}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
              <span>{t('footer.copyright')}</span>
              <span className="text-gray-400">|</span>
              <span>{t('footer.company.business_license')}</span>
            </div>
          </div>

          {/* 약관 링크 영역 */}
          <div className="flex gap-6 text-sm h-9 items-center md:mr-32">
            <Link to="/terms?tab=terms" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t('footer.terms')}
            </Link>
            <Link to="/terms?tab=privacy" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">
              {t('footer.privacy')}
            </Link>
          </div>

          {/* 언어 선택 영역 */}
          <div className="relative h-9">
            <select 
              className="appearance-none bg-white border rounded-lg px-4 h-9 pr-8 text-sm text-gray-600 cursor-pointer hover:border-blue-500 transition-colors focus:outline-none focus:border-blue-500 whitespace-nowrap"
              defaultValue="ko"
              onChange={handleLanguageChange}
            >
              <option value="ko">{t('footer.language.ko')}</option>
              <option value="en">{t('footer.language.en')}</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                className="w-4 h-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 