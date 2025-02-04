import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import awesomeitLogo from '../assets/images/awesomeit_logo.png';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { styles } from '../styles/common';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [openQuestion, setOpenQuestion] = React.useState(null);

  React.useEffect(() => {
    i18n.changeLanguage('ko');
  }, [i18n]);

  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const goToCompany = () => {
    navigate('/company');
    window.scrollTo(0, 0);
  };

  const goToEMM = () => {
    navigate('/emm');
    window.scrollTo(0, 0);
  };

  const goToFAQ = () => {
    navigate('/faq');
    window.scrollTo(0, 0);
  };

  const tutorialVideos = [
    {
      title: "회원가입 방법",
      videoUrl: "#",
      thumbnail: "thumbnail1.jpg"
    },
    {
      title: "전체 소개",
      videoUrl: "#",
      thumbnail: "thumbnail2.jpg"
    },
    {
      title: "앱 설정 방법",
      videoUrl: "#",
      thumbnail: "thumbnail3.jpg"
    },
    {
      title: "프로비저닝 방법",
      videoUrl: "#",
      thumbnail: "thumbnail4.jpg"
    }
  ];

  const faqData = [
    {
      question: "EMM이 무엇인가요?",
      answer: "EMM(Enterprise Mobility Management)은 기업의 모바일 기기를 통합 관리하고 보안을 강화하는 솔루션입니다. 기기 관리, 앱 관리, 콘텐츠 관리 등 다양한 기능을 제공합니다."
    },
    {
      question: "프로비저닝이 무엇인가요?",
      answer: "프로비저닝은 모바일 기기에 EMM 관리 권한을 부여하는 과정입니다. 이를 통해 기업의 보안 정책을 적용하고 기기를 효율적으로 관리할 수 있습니다."
    },
    {
      question: "가격 정책은 어떻게 되나요?",
      answer: "기기 수에 따른 라이선스 형태로 제공되며, 기본 플랜과 프리미엄 플랜이 있습니다. 자세한 가격은 영업팀에 문의해 주시기 바랍니다."
    },
    {
      question: "무료로 사용해 볼 수 있나요?",
      answer: "무료 체험을 원하실 경우 도입문의를 통해 무료 체험을 신청해 주세요."
    },
    {
      question: "어떤 언어를 지원하나요?",
      answer: "현재 한국어와 영어를 지원하고 있으며, 추후 다른 언어도 지원할 예정입니다."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Video Tutorials Section */}
        <section className={`${styles.section} ${styles.bgSecondary}`}>
          <div className={styles.container}>
            <h2 className={styles.h2}>동영상 튜토리얼</h2>
            <div className="overflow-x-auto">
              <div className="flex justify-center space-x-3 min-w-min pb-2">
                {tutorialVideos.map((video, index) => (
                  <div key={index} className={`${styles.card} flex-shrink-0`} style={{ width: '240px' }}>
                    <div className="relative aspect-[16/9] bg-gray-100">
                      <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-80" />
                    </div>
                    <div className="p-2">
                      <h3 className="font-medium text-sm">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className="max-w-3xl mx-auto">
              <h2 className={styles.h2}>자주 묻는 질문</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50"
                      onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                    >
                      <span className="font-medium text-left">{faq.question}</span>
                      {openQuestion === index ? (
                        <ChevronUp className={styles.icon} />
                      ) : (
                        <ChevronDown className={styles.icon} />
                      )}
                    </button>
                    {openQuestion === index && (
                      <div className="px-6 py-4 bg-gray-50 border-t">
                        <p className={styles.textSecondary}>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ; 