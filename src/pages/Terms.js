import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 탭 컨텐츠를 별도의 컴포넌트로 분리
const TabContent = React.memo(({ activeTab }) => {
  if (activeTab === 'terms') {
    return (
      <div className="prose prose-lg" key="terms">
        <h1 className="text-3xl font-bold mb-8">AwesomeONE 솔루션 이용약관</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제1조(목적)</h2>
          <p className="mb-4">본 약관은 주식회사 어썸잇(이하 "회사")이 제공하는 "AwesomeONE" 솔루션(이하 "솔루션")을 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제2조(용어의 정의)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>"솔루션"이라 함은 회사가 제공하는 기업용 모바일 기기 관리 솔루션인 "AwesomeONE"을 말합니다.</li>
            <li>"이용자"라 함은 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 솔루션을 이용하는 법인 또는 개인사업자를 말합니다.</li>
            <li>"관리자"라 함은 이용자가 지정한 솔루션 관리 담당자로서, 솔루션의 관리 콘솔에 접근하여 정책을 설정하고 기기를 관리할 수 있는 권한을 가진 자를 말합니다.</li>
            <li>"최종 사용자"라 함은 이용자의 임직원 중 솔루션을 통해 관리되는 모바일 기기의 실제 사용자를 말합니다.</li>
            <li>"관리 대상 기기"라 함은 솔루션을 통해 관리되는 모바일 기기를 말합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제3조(약관의 게시와 개정)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 솔루션 홈페이지 또는 관리 콘솔 화면에 게시합니다.</li>
            <li>회사는 "약관의 규제에 관한 법률", "개인정보보호법" 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</li>
            <li>회사가 약관을 개정할 경우에는 개정된 약관의 적용일자 및 개정사유를 명시하여 현행약관과 함께 솔루션 홈페이지 또는 관리 콘솔 화면에 그 적용일자 7일 이전부터 공지합니다. 다만, 이용자에게 불리한 약관의 개정의 경우에는 30일 이전부터 공지하고, 이메일 등으로 이용자에게 개별 통지합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제4조(솔루션의 내용)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>회사가 제공하는 솔루션의 내용은 다음 각 호와 같습니다:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>모바일 기기 관리(MDM) 기능</li>
                <li>모바일 앱 관리(MAM) 기능</li>
                <li>모바일 보안 관리 기능</li>
                <li>기타 부가 기능</li>
              </ul>
            </li>
            <li>회사는 솔루션의 개선을 위하여 수시로 솔루션 내용을 변경할 수 있으며, 중요한 기능의 변경이 있는 경우에는 변경 적용일 30일 전까지 이용자에게 공지합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제5조(이용자의 의무)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>이용자는 관련 법령, 본 약관의 규정, 이용안내 및 솔루션과 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.</li>
            <li>이용자는 다음 각 호의 행위를 하여서는 안 됩니다:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>솔루션 신청 또는 변경 시 허위 내용의 등록</li>
                <li>회사가 제공하는 솔루션을 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위</li>
                <li>회사의 솔루션을 해킹하거나 해킹에 이용하는 행위</li>
                <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
                <li>기타 관련 법령에 위배되거나 부적절하다고 판단되는 행위</li>
              </ul>
            </li>
            <li>이용자는 최종 사용자의 개인정보 보호를 위한 충분한 조치를 취하여야 하며, 솔루션 이용과 관련하여 최종 사용자의 권리가 침해되지 않도록 하여야 합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제6조(회사의 의무)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>회사는 관련 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 솔루션을 제공하기 위하여 최선을 다하여 노력합니다.</li>
            <li>회사는 이용자가 안전하게 솔루션을 이용할 수 있도록 개인정보(신용정보 포함) 보호를 위한 보안시스템을 갖추어야 하며, 개인정보처리방침을 공시하고 준수합니다.</li>
            <li>회사는 다음 각 호의 경우 서비스 제공을 중단할 수 있습니다:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>솔루션 설비의 보수 등 공사로 인한 부득이한 경우</li>
                <li>전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지한 경우</li>
                <li>국가비상사태, 정전, 설비의 장애 또는 이용의 폭주 등으로 정상적인 솔루션 이용에 지장이 있는 경우</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제7조(데이터의 보관 및 보안)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>회사는 이용자의 데이터를 국내에 소재한 데이터센터에 저장하고 관리합니다.</li>
            <li>회사는 다음 각 호의 보안조치를 통해 이용자의 데이터를 보호합니다:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>데이터 암호화</li>
                <li>접근 통제 및 권한 관리</li>
                <li>보안 시스템 구축 및 운영</li>
              </ul>
            </li>
            <li>이용자는 솔루션 이용 중단 또는 종료 시 자신의 데이터를 백업할 책임이 있으며, 이용계약 종료 후 회사는 이용자의 데이터를 관련 법령에 따라 보관하거나 삭제할 수 있습니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제8조(이용계약 및 문의)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>본 솔루션을 이용하기 위해서는 회사와 별도의 이용계약을 체결하여야 합니다.</li>
            <li>솔루션 이용 문의 및 계약 관련 사항은 다음의 연락처로 문의하실 수 있습니다:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>전화: 02-856-0604</li>
                <li>이메일: sales-support@awesomeit.co.kr</li>
              </ul>
            </li>
            <li>회사의 서비스 지원 수준은 다음과 같습니다:
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>기본 서비스 운영: 24시간 365일</li>
                <li>기술 지원: 평일 09:00~17:00</li>
                <li>긴급 장애 대응: 24시간 연중무휴</li>
                <li>정기 점검: 월 1회 실시</li>
              </ul>
            </li>
            <li>계약 체결 전 회사가 제공하는 견적이나 제안은 참고사항이며, 실제 서비스 이용 조건은 개별 계약에서 정한 바에 따릅니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제9조(준거법 및 관할법원)</h2>
          <p className="mb-4">본 약관의 해석은 대한민국 법률을 준거법으로 하며, 본 약관과 관련하여 분쟁이 발생할 경우 서울중앙지방법원을 제1심 관할법원으로 합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">부칙</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>제1조 (시행일) 본 약관은 2024년 2월 4일부터 시행합니다.</li>
            <li>제2조 (이전 약관의 효력) 본 약관 시행 이전에 체결된 이용계약에 대해서는 계약 체결 당시의 약관이 적용됩니다.</li>
          </ol>
        </section>
      </div>
    );
  }
  
  if (activeTab === 'privacy') {
    return (
      <div className="prose prose-lg" key="privacy">
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제1조(목적)</h2>
          <p className="mb-4">주식회사 어썸잇(이하 '회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 '회사 서비스')를 이용하는 개인(이하 '이용자' 또는 '개인')의 정보(이하 '개인정보')를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 '본 방침')을 수립합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제2조(개인정보 처리의 원칙)</h2>
          <p className="mb-4">개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며, 수집된 개인정보는 다음 각 호의 어느 하나에 해당하는 경우에 한하여 제3자에게 제공될 수 있습니다.</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>정보주체의 동의를 받은 경우</li>
            <li>법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우</li>
            <li>공공기관이 법령 등에서 정하는 소관 업무의 수행을 위하여 불가피한 경우</li>
            <li>정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제3조(본 방침의 공개)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다.</li>
            <li>회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제4조(본 방침의 변경)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.</li>
            <li>회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법</li>
                <li>서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법</li>
              </ol>
            </li>
            <li>회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제5조(기타 수집 정보)</h2>
          <p className="mb-4">회사는 아래와 같이 정보를 수집합니다.</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>수집목적: 문의 대응 및 회신</li>
            <li>수집정보: 이메일주소, 자동차 제조사, 차종, 시스템 정보</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제27조(회사의 개인정보 보호 책임자 지정)</h2>
          <p className="mb-4">회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를 지정하고 있습니다.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>개인정보 보호 책임자
              <ul className="list-[circle] pl-6 mt-2 space-y-1">
                <li>성명: 손정열</li>
                <li>직책: 매니저</li>
                <li>전화번호: 02-856-0604</li>
                <li>이메일: sales-support@awesomeit.co.kr</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제28조(권익침해에 대한 구제방법)</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
              <ul className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                <li>개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
                <li>대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
                <li>경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">부칙</h2>
          <p className="mb-4">제1조 본 방침은 2024년 2월 4일부터 시행됩니다.</p>
        </section>
      </div>
    );
  }
  
  return null;
});

const Terms = () => {
  const [activeTab, setActiveTab] = useState('terms');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');
    if (tab === 'privacy' || tab === 'terms') {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('tab', tab);
    window.history.pushState({}, '', `${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 max-w-4xl py-12">
        {/* 탭 버튼 */}
        <div className="flex space-x-4 mb-8 border-b">
          <button
            className={`pb-4 px-4 text-lg font-medium transition-colors ${
              activeTab === 'terms'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('terms')}
          >
            이용약관
          </button>
          <button
            className={`pb-4 px-4 text-lg font-medium transition-colors ${
              activeTab === 'privacy'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('privacy')}
          >
            개인정보 처리방침
          </button>
        </div>

        {/* 탭 컨텐츠 */}
        <React.Suspense fallback={<div>로딩중...</div>}>
          <div key={activeTab}>
            <TabContent activeTab={activeTab} />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
};

export default Terms; 