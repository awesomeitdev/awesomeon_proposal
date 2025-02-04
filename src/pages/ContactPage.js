import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    position: '',
    email: '',
    industry: '',
    deviceCount: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // mailto 링크를 생성하여 이메일 클라이언트 실행
    const subject = `[도입문의] ${formData.companyName}`;
    const body = `
회사명: ${formData.companyName}
이름: ${formData.name}
직책: ${formData.position}
이메일: ${formData.email}
업종: ${formData.industry}
예상 디바이스 수: ${formData.deviceCount}

문의내용:
${formData.message}
    `;

    window.location.href = `mailto:sales-support@awesomeit.co.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-bold mb-12 text-center">
              도입문의
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">문의하기</h3>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfodzPClwTO9-DUORIfJgg6S0Or2mXXC8Gsh1fM1Z243PCYHQ/viewform?embedded=true" width="640" height="2185" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 