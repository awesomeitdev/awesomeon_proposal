import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-6 max-w-7xl py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-gray-600">
            {t('footer.copyright')}
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('footer.terms')}
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
          <div className="relative">
            <select 
              className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 text-gray-600 cursor-pointer hover:border-blue-500 transition-colors focus:outline-none focus:border-blue-500"
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