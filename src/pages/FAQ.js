import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, Play } from 'lucide-react';
import { styles } from '../styles/common';
import accountStep1 from '../assets/images/Account and App Management_Step1.jpg';
import accountStep2 from '../assets/images/Account and App Management_Step2.jpg';
import deviceStep1 from '../assets/images/Device Provisioning_Step1.jpg';

const FAQPage = () => {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = React.useState(null);

  const tutorialVideos = [
    {
      title: t('faq.videoTutorials.videos.0.title'),
      videoUrl: "https://youtu.be/BFJeY_X_BIk",
      thumbnail: accountStep1
    },
    {
      title: t('faq.videoTutorials.videos.1.title'),
      videoUrl: "https://youtu.be/x7dxs6rHxCQ",
      thumbnail: accountStep2
    },
    {
      title: t('faq.videoTutorials.videos.2.title'),
      videoUrl: "https://youtu.be/NNeAeNwhYIw",
      thumbnail: deviceStep1
    }
  ];

  const faqData = t('faq.frequentlyAskedQuestions.questions', { returnObjects: true });

  return (
    <div className="pt-20">
      {/* Video Tutorials Section */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className={styles.container}>
          <h2 className={styles.h2}>{t('faq.videoTutorials.title')}</h2>
          <div className="overflow-x-auto">
            <div className="flex justify-center space-x-3 min-w-min pb-2">
              {tutorialVideos.map((video, index) => (
                <a 
                  key={index} 
                  href={video.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.card} flex-shrink-0 cursor-pointer`} 
                  style={{ width: '240px' }}
                >
                  <div className="relative aspect-[16/9] bg-gray-100">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-80" />
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-sm">{video.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="max-w-3xl mx-auto">
            <h2 className={styles.h2}>{t('faq.frequentlyAskedQuestions.title')}</h2>
            
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
    </div>
  );
};

export default FAQPage; 