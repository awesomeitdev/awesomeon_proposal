import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles/common';
import { FaCheck as Check } from 'react-icons/fa';
import { FiSettings as Settings, FiUsers as Users, FiShield as Shield, FiLayout as Layout, FiPhone as Phone, FiMail as Mail, FiClock as Clock } from 'react-icons/fi';
import heroBackgroundImg from '../assets/images/smartphone-5692534_1280.jpg';

// 이미지 URL을 상수로 정의
const IMAGES = {
  heroBackground: heroBackgroundImg,
  intuitiveInterface: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  customization: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80'
};

const EMMSolutionPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const mounted = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const cleanupRef = useRef(() => {});

  // 초기 마운트 처리
  useEffect(() => {
    mounted.current = true;
    let timeoutId;
    
    const init = async () => {
      try {
        if (mounted.current) {
        await i18n.changeLanguage('ko');
          timeoutId = setTimeout(() => {
            if (mounted.current) {
          setIsLoading(false);
            }
          }, 100);
        }
      } catch (error) {
        console.error('Initialization failed:', error);
        if (mounted.current) {
        setIsLoading(false);
        }
      }
    };

    init();

    return () => {
      mounted.current = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cleanupRef.current();
    };
  }, [i18n]);

  // 스크롤 처리
  useEffect(() => {
    if (!mounted.current || isLoading) return;

    let scrollTimeoutId;
    const handleScroll = () => {
      if (scrollTimeoutId) {
        clearTimeout(scrollTimeoutId);
      }

      scrollTimeoutId = setTimeout(() => {
      try {
          if (!mounted.current) return;
          
      const hash = location.hash.replace('#', '');
    if (hash) {
        const element = document.getElementById(hash);
            if (element && mounted.current) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Scroll handling failed:', error);
      }
      }, 100);
    };

    handleScroll();
    
    return () => {
      if (scrollTimeoutId) {
        clearTimeout(scrollTimeoutId);
      }
    };
  }, [location.hash, isLoading]);

  const handleNavigation = useCallback((path) => {
    if (!mounted.current) return;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  const scrollToSection = useCallback((sectionId) => {
    if (!mounted.current || isLoading) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isLoading]);

  const goToHome = useCallback(() => handleNavigation('/emm'), [handleNavigation]);
  const goToCompany = useCallback(() => handleNavigation('/company'), [handleNavigation]);
  const goToEMM = useCallback(() => handleNavigation('/emmintroduce'), [handleNavigation]);
  const goToFAQ = useCallback(() => handleNavigation('/faq'), [handleNavigation]);
  const goToContactPage = useCallback(() => handleNavigation('/contact'), [handleNavigation]);

  const handleLanguageChange = useCallback((e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  }, [i18n]);

  const handleFreeTrialClick = useCallback(() => {
    alert(t('alerts.freeTrial'));
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfodzPClwTO9-DUORIfJgg6S0Or2mXXC8Gsh1fM1Z243PCYHQ/viewform?usp=header', '_blank');
  }, [t]);

  return (
    <div className="pt-20">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          {/* 배경 이미지 오버레이 */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ 
              backgroundImage: `url(${IMAGES.heroBackground})`,
              backgroundBlendMode: 'overlay'
            }}
          />
          
          {/* 컨텐츠 */}
          <div className="relative container mx-auto px-4 lg:px-8 max-w-screen-xl py-16 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">
                AwesomeONE
              </h1>
              <p className="text-lg md:text-2xl mb-8 md:mb-12 opacity-90 leading-relaxed whitespace-pre-line">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={handleFreeTrialClick}
                  className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-50 transition-colors w-full sm:w-auto text-center"
                >
                  {t('hero.button')}
                </button>
                <button 
                  onClick={() => window.open('https://one-console.awesomeit.co.kr/', '_blank')}
                  className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
                >
                  {t('hero.consoleMove')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 특징 섹션들 */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            {/* 첫 번째 특징 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-32">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                  {t('features.fullManagement.title')}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed whitespace-pre-line">
                  {t('features.fullManagement.description')}
                </p>
                <ul className="space-y-4">
                  {t('features.fullManagement.bullets', { returnObjects: true })?.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1">
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={IMAGES.intuitiveInterface}
                  alt="Full Management"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>

            {/* 두 번째 특징 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 flex items-center gap-4">
                  {t('features.workProfile.title')}
                  <span className={styles.badge}>
                    {t('common.comingSoon')}
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 whitespace-pre-line">
                  {t('features.workProfile.description')}
                </p>
                <ul className="space-y-4">
                  {t('features.workProfile.bullets', { returnObjects: true })?.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1">
                        <Check className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                      </div>
                      <span className="text-base md:text-lg text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src={IMAGES.customization}
                  alt="Work Profile"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Management Modes */}
        <section className={`${styles.section} ${styles.bgSecondary}`}>
          <div className={styles.container}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('managementModes.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  {t('managementModes.fullManagement.title')}
                </h3>
                <p className={styles.paragraph}>
                  {t('managementModes.fullManagement.description')}
                </p>
                <ul className={styles.list}>
                  {(() => {
                    const bullets = t('managementModes.fullManagement.bullets', { returnObjects: true });
                    return (
                      <>
                        <li className="flex items-center text-base">
                          <Settings className={styles.icon} />
                          {t('managementModes.fullManagement.features.deviceControl')}
                        </li>
                        <li className="flex items-center text-base">
                          <Users className={styles.icon} />
                          {t('managementModes.fullManagement.features.accountControl')}
                        </li>
                        <li className="flex items-center text-base">
                          <Shield className={styles.icon} />
                          {t('managementModes.fullManagement.features.security')}
                        </li>
                        <li className="flex items-center text-base">
                          <Layout className={styles.icon} />
                          {bullets[1]}
                        </li>
                      </>
                    );
                  })()}
                </ul>
              </div>

              {/* Semi Manage Mode */}
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  {t('managementModes.semiManage.title')} {t('common.mode')}
                </h3>
                <p className={styles.paragraph}>
                  {t('managementModes.semiManage.description')}
                </p>
                <ul className={styles.list}>
                  {(() => {
                    const bullets = t('managementModes.semiManage.bullets', { returnObjects: true });
                    return bullets.map((bullet, index) => (
                      <li key={index} className="flex items-center text-base">
                        {index === 0 && <Settings className={styles.icon} />}
                        {index === 1 && <Users className={styles.icon} />}
                        {index === 2 && <Shield className={styles.icon} />}
                        {index === 3 && <Layout className={styles.icon} />}
                        {bullet}
                      </li>
                    ));
                  })()}
                </ul>
              </div>

              {/* Split Control Mode */}
              <div className={styles.card}>
                <h3 className={`${styles.h3} flex items-center gap-4`}>
                  {t('managementModes.workProfile.title')} {t('common.mode')}
                  <span className={styles.badge}>
                    {t('common.comingSoon')}
                  </span>
                </h3>
                <p className={styles.paragraph}>
                  {t('managementModes.workProfile.description')}
                </p>
                <ul className={styles.list}>
                  {(() => {
                    const bullets = t('managementModes.workProfile.bullets', { returnObjects: true });
                    return (
                      <>
                        <li className="flex items-center text-base">
                          <Layout className={styles.icon} />
                          {t('managementModes.workProfile.features.separation')}
                        </li>
                        <li className="flex items-center text-base">
                          <Users className={styles.icon} />
                          {t('managementModes.workProfile.features.personalUse')}
                        </li>
                        <li className="flex items-center text-base">
                          <Shield className={styles.icon} />
                          {t('managementModes.workProfile.features.workSecurity')}
                        </li>
                        <li className="flex items-center text-base">
                          <Settings className={styles.icon} />
                          {t('managementModes.workProfile.features.easyApply')}
                        </li>
                      </>
                    );
                  })()}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="core-features" className={styles.section}>
          <div className={styles.container}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('coreFeatures.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* MDM */}
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  {t('coreFeatures.mdm.title')}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.mdm.deviceControl.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const deviceControlItems = t('coreFeatures.mdm.deviceControl.items', { returnObjects: true });
                        return deviceControlItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.mdm.systemPolicy.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const systemPolicyItems = t('coreFeatures.mdm.systemPolicy.items', { returnObjects: true });
                        return systemPolicyItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.mdm.networkPolicy.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const networkPolicyItems = t('coreFeatures.mdm.networkPolicy.items', { returnObjects: true });
                        return networkPolicyItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Security Policy */}
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  {t('coreFeatures.security.title')}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.security.screenLock.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const screenLockItems = t('coreFeatures.security.screenLock.items', { returnObjects: true });
                        return screenLockItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.security.location.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const locationItems = t('coreFeatures.security.location.items', { returnObjects: true });
                        return locationItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                </div>
              </div>

              {/* MAM */}
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  {t('coreFeatures.mam.title')}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.mam.appPolicy.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const appPolicyItems = t('coreFeatures.mam.appPolicy.items', { returnObjects: true });
                        return (
                          <>
                            <li>
                              {appPolicyItems[0].title}
                              <ul className="pl-5 mt-2 space-y-2 text-sm">
                                {appPolicyItems[0].subitems.map((subitem, subIndex) => (
                                  <li key={subIndex}>- {subitem}</li>
                                ))}
                              </ul>
                            </li>
                            <li>{appPolicyItems[1]}</li>
                            <li>{appPolicyItems[2]}</li>
                            <li>{appPolicyItems[3]}</li>
                          </>
                        );
                      })()}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {t('coreFeatures.mam.kioskMode.title')}
                    </h4>
                    <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                      {(() => {
                        const kioskModeItems = t('coreFeatures.mam.kioskMode.items', { returnObjects: true });
                        return kioskModeItems.map((item, index) => (
                          <li key={index}>{item}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        {/*
        <section className={`${styles.section} ${styles.bgSecondary}`}>
          <div className={styles.container}>
            <h2 className={styles.h2}>
              {t('industrySolutions.title')}
            </h2>
            <div className={styles.grid2Cols}>
              <div className={styles.card}>
                <div className="flex gap-8">
                  <div className="flex-1">
                    <h3 className={styles.h3}>
                      {t('industrySolutions.entertainment.title')}
                    </h3>
                    <p className={styles.paragraph}>
                      {t('industrySolutions.entertainment.description')}
                    </p>
                    <ul className="space-y-4 text-base text-gray-600">
                      {(() => {
                        const entertainmentFeatures = t('industrySolutions.entertainment.features', { returnObjects: true });
                        return entertainmentFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                  <div className="w-48 flex-shrink-0">
                    <img 
                      src={entertainmentImg} 
                      alt="Entertainment/Kiosk" 
                      className="w-full h-full object-contain rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className="flex gap-8">
                  <div className="flex-1">
                    <h3 className={styles.h3}>
                      {t('industrySolutions.education.title')}
                    </h3>
                    <p className={styles.paragraph}>
                      {t('industrySolutions.education.description')}
                    </p>
                    <ul className="space-y-4 text-base text-gray-600">
                      {(() => {
                        const educationFeatures = t('industrySolutions.education.features', { returnObjects: true });
                        return educationFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ));
                      })()}
                    </ul>
                  </div>
                  <div className="w-48 flex-shrink-0">
                    <img 
                      src={educationImg} 
                      alt="Education" 
                      className="w-full h-full object-contain rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Technical Info */}
        <section id="technical-info" className={styles.section}>
          <div className={styles.container}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('technicalInfo.title')}
            </h2>
            <div className="max-w-4xl mx-auto px-4">
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  {t('technicalInfo.androidVersion.title')}
                </h3>
                <table className="w-full mb-8">
                  <tbody className="divide-y">
                    {(() => {
                      const versions = t('technicalInfo.androidVersion.versions', { returnObjects: true }) || {};
                      return (
                        <>
                          <tr>
                            <td className="py-4 text-base">{versions?.dedicated?.name || ''}</td>
                            <td className="py-4 font-medium text-base">{versions?.dedicated?.version || ''}</td>
                          </tr>
                          <tr>
                            <td className="py-4 text-base">{versions?.fullManagement?.name || ''}</td>
                            <td className="py-4 font-medium text-base">{versions?.fullManagement?.version || ''}</td>
                          </tr>
                          <tr>
                            <td className="py-4 text-base">{versions?.workProfile?.name || ''}</td>
                            <td className="py-4 font-medium text-base">
                              <span className="text-yellow-600">
                                {t('technicalInfo.androidVersion.comingSoon')}
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })()}
                  </tbody>
                </table>

                <h3 className={styles.h3}>
                  {t('technicalInfo.systemRequirements.title')}
                </h3>
                <ul className="space-y-3 text-base text-gray-600 list-disc pl-5">
                  {(() => {
                    const systemRequirements = t('technicalInfo.systemRequirements.items', { returnObjects: true });
                    return systemRequirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ));
                  })()}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support-contact" className={`${styles.section} ${styles.bgSecondary}`}>
          <div className={styles.container}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('support.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className={styles.card}>
                  {(() => {
                    const contact = t('support.contact', { returnObjects: true });
                    return (
                      <>
                        <h3 className={styles.h3}>
                          {contact.title}
                        </h3>
                        <ul className="space-y-6">
                          <li className="flex items-center text-base">
                            <Phone className={styles.icon} />
                            {contact.phone}
                          </li>
                          <li className="flex items-center text-base">
                            <Mail className={styles.icon} />
                            {contact.email}
                          </li>
                        </ul>
                      </>
                    );
                  })()}
                </div>
                <div className={styles.card}>
                  {(() => {
                    const serviceLevel = t('support.serviceLevel', { returnObjects: true });
                    return (
                      <>
                        <h3 className={styles.h3}>
                          {serviceLevel.title}
                        </h3>
                        <ul className="space-y-4 text-base">
                          <li className="flex items-center">
                            <Clock className={styles.icon} />
                            {serviceLevel.basic}
                          </li>
                          <li className="pl-9">{serviceLevel.support}</li>
                          <li className="pl-9">{serviceLevel.emergency}</li>
                          <li className="pl-9">{serviceLevel.inspection}</li>
                        </ul>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EMMSolutionPage; 