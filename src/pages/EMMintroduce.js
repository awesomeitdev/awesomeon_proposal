import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import awesomeitLogo from '../assets/images/awesomeit_logo.png';

const EMMIntroduce = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
          <h1 className="text-4xl font-bold mb-8">{t('emmIntroduce.title')}</h1>
          
          {/* EMM 개요 섹션 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('emmIntroduce.whatIsEmm.title')}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {t('emmIntroduce.whatIsEmm.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {t('emmIntroduce.whatIsEmm.description2')}
            </p>
          </div>

          {/* 프로비저닝 설명 섹션 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('emmIntroduce.whatIsProvisioning.title')}</h2>
            <p className="text-lg text-gray-600 mb-4">
              {t('emmIntroduce.whatIsProvisioning.description')}
            </p>
          </div>

          {/* EMM 필요성 섹션 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('emmIntroduce.whenToUseEmm.title')}</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600 space-y-2">
              {t('emmIntroduce.whenToUseEmm.situations', { returnObjects: true }).map((situation, index) => (
                <li key={index}>{situation}</li>
              ))}
            </ul>
          </div>

          {/* 어썸잇 EMM 특장점 섹션 */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('emmIntroduce.awesomeoneFeatures.title')}</h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('emmIntroduce.awesomeoneFeatures.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('emmIntroduce.awesomeoneFeatures.adminConvenience.title')}</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  {t('emmIntroduce.awesomeoneFeatures.adminConvenience.features', { returnObjects: true }).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('emmIntroduce.awesomeoneFeatures.reliability.title')}</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  {t('emmIntroduce.awesomeoneFeatures.reliability.features', { returnObjects: true }).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMMIntroduce; 