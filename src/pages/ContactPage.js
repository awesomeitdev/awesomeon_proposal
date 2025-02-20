import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-12">문의하기</h1>
        {/* Contact form content */}
      </div>
    </div>
  );
};

export default ContactPage; 