import React, { useState } from 'react';
import { Home, Users, Shield, HelpCircle, Image, Check, FileText, Bell, Settings, ChevronLeft, Smile, MessageCircle, Heart,MessageCircleMore} from 'lucide-react';

// Main App Container
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [contractType, setContractType] = useState('');

  const navigateTo = (screen, type = '') => {
    setCurrentScreen(screen);
    if (type) setContractType(type);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'upload':
        return <UploadScreen onNavigate={navigateTo} />;
      case 'checkpoints':
        return <CheckpointsScreen onNavigate={navigateTo} />;
      case 'results':
        return <ResultsScreen onNavigate={navigateTo} />;
      case 'work':
        return <WorkScreen onNavigate={navigateTo} />;
      case 'insurance':
        return <InsuranceScreen onNavigate={navigateTo} />;
      case 'mypage':
        return <MyPageScreen onNavigate={navigateTo} />;
      case 'notification':
        return <NotificationScreen onNavigate={navigateTo} />;
      case  'smile' :
        return <NotificationScreen onNavigate={navigateTo} />;
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-20">
      {renderScreen()}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between p-4 max-w-md mx-auto">
        <button 
          onClick={() => navigateTo('insurance')} 
          className={`text-gray-600 flex flex-col items-center ${currentScreen === 'home' ? 'text-teal-500' : ''}`}
        >
          <Smile size={24} />
          <span className="text-xs mt-1">이벤트</span>
        </button>
        <button 
          onClick={() => navigateTo('work')}
          className={`text-gray-600 flex flex-col items-center ${currentScreen === 'work' ? 'text-teal-500' : ''}`}
        >
          <MessageCircle size={24} />
          <span className="text-xs mt-1">커뮤니티</span>
        </button>
        <button 
          onClick={() => navigateTo('home')}
          className="text-gray-600 bg-teal-500 rounded-full p-3 -mt-8"
        >
          <Shield size={24} className="text-white" />
        </button>
        <button 
          onClick={() => navigateTo('notification')}
          className={`text-gray-600 flex flex-col items-center ${currentScreen === 'notification' ? 'text-teal-500' : ''}`}
        >
          <Bell size={24} />
          <span className="text-xs mt-1">알림</span>
        </button>
        <button 
          onClick={() => navigateTo('mypage')}
          className={`text-gray-600 flex flex-col items-center ${currentScreen === 'mypage' ? 'text-teal-500' : ''}`}
        >
          <Settings size={24} />
          <span className="text-xs mt-1">마이페이지</span>
        </button>
      </nav>
    </div>
  );
};

// Home Screen (First Screen)
const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
        <button className="text-gray-500 text-sm">로그인</button>
      </header>

      <div className="flex justify-between mb-8">
        <NavButton icon={<Smile size={24} />} label="부동산" />
        <NavButton icon={<Users size={24} />} label="근로" />
        <NavButton icon={<Shield size={24} />} label="보험" />
        <NavButton icon={<HelpCircle size={24} />} label="기타" />
      </div>

      <div 
        onClick={() => onNavigate('checkpoints')}
        className="bg-teal-500 text-white p-4 rounded-lg mb-6 cursor-pointer hover:bg-teal-600 transition-colors"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-medium">계약 체크 포인트 시스템</h2>
          <span className="text-2xl">••</span>
        </div>
        <p className="text-sm mt-2">계약 임 / 중 / 후 체크해볼 것 나</p>
      </div>

      <div className="space-y-4">
        <div onClick={() => onNavigate('upload', '전세')} className="cursor-pointer">
          <ServiceCard 
            title="전세 계약서" 
            description="월세 계약 정보 가입 / 권리 보존 갱신 설정 / 특약사항 설정"
            icon={<Smile className="text-teal-500" size={20} />}
          />
        </div>
        <ServiceCard 
          title="아르바이트 계약서" 
          description="월수 업무 기재사항 / 법정 수당 산정 계산기 / 근로가중별 위반 조항 표준"
          icon={<span className="text-teal-500">✎</span>}
        />
        <ServiceCard 
          title="생명보험 계약서" 
          description="월수 업무 기재사항 / 표준법정과 차이점 / 부정한 계약서 열악적 조항"
          icon={<Shield className="text-teal-500" size={20} />}
        />
      </div>
    </div>
  );
};

// Upload Screen (Second Screen)
const UploadScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
      </header>
      
      <h2 className="text-xl font-medium mb-6">계약서 검토</h2>
      
      <div className="bg-gray-100 rounded-lg p-8 mb-6 flex flex-col items-center justify-center min-h-[200px]">
        <Image size={48} className="text-gray-400 mb-4" />
        <p className="text-sm text-gray-500 text-center">
          해당 되는 뷰포인트 모델이 있어야<br />
          될정하기 위한 방법을 선택해주세요
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <select className="w-full p-3 rounded-lg border border-gray-200">
          <option>분류</option>
        </select>
        <select className="w-full p-3 rounded-lg border border-gray-200">
          <option>소분류</option>
        </select>
        <div className="flex gap-2 flex-wrap">
          {['청약', '철회', '임대차계약', '보험', '전세계약', '기타'].map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button 
        onClick={() => onNavigate('checkpoints')}
        className="w-full bg-teal-500 text-white py-3 rounded-lg"
      >
        분석 하기
      </button>
    </div>
  );
};

// Checkpoints Screen (Third Screen)
const CheckpointsScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
      </header>

      <div className="mb-6">
        <h2 className="text-xl font-medium">전세 계약 체크 포인트 시스템</h2>
        <div className="flex gap-4 mt-2">
          <button className="text-teal-500">계약전</button>
          <button className="text-gray-400">계약작성전</button>
          <button className="text-gray-400">계약작성</button>
          <button className="text-gray-400">계약후</button>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <CheckpointCard
          title="등록된 적선 공인중개사가 맛는지 확인"
          description="•국가공경정보플렛폼에서 공인중개사 자격여부를 확인하세요"
          checked={true}
        />
        <CheckpointCard
          title="중개사 자격증이 있는 사람과 계약하면 클릭하세요"
          description="나중에 입를 목적을 공인수에 가난하실 이용이 없어서 할니다"
          checked={false}
        />
        <CheckpointCard
          title="건축물 상세 공식"
          description="•공식검증 설정 과제"
          checked={false}
        />
      </div>

      <button 
        className="w-full bg-teal-500 text-white py-3 rounded-lg"
      >
        다음 단계로
      </button>
    </div>
  );
};

// Results Screen (Fourth Screen)
const ResultsScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
      </header>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Check className="text-teal-500" size={24} />
          <Check className="text-teal-500" size={24} />
          <Check className="text-teal-500" size={24} />
          <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center">
            4
          </div>
        </div>

        <h2 className="text-xl font-medium mb-4">해당 계약서의 위험도는 30%입니다</h2>
        
        <div className="space-y-4">
          <ResultCard title="필수 계약 정보" status="완료" description="기입 여부" />
          <ResultCard title="법적 보호 장치" status="완료" description="설정 여부" />
          <ResultCard title="특약 사항 검토" status="완료" description="검토" />
          <ResultCard title="프리미엄" status="완료" description="서비스" />
        </div>
      </div>

      <button 
        onClick={() => onNavigate('home')}
        className="w-full bg-teal-500 text-white py-3 rounded-lg mb-4"
      >
        상세 보기
      </button>
      
      <p className="text-center text-sm text-gray-500">
        더 확실한 계약서 검토는<br />
        프리미엄 서비스로 확인하세요
      </p>
    </div>
  );
};

// New Screens
const WorkScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
        <button className="text-gray-500 text-sm">로그인</button>
      </header>

      <h2 className="text-xl font-medium mb-6">커뮤니티</h2>

      <div className="flex gap-2 mb-6 overflow-x-auto py-2">
        {['전체', '부동산', '보험', '근로', '질문', '꿀팁'].map(tag => (
          <span key={tag} 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap 
            ${tag === '전체' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <CommunityCard 
          title="전세 계약할 때 주의사항 알려드립니다" 
          content="제가 경험한 전세 계약 과정에서 알게 된 꿀팁을 공유합니다. 먼저..."
          author="부동산전문가"
          time="10분 전"
          likes={24}
          comments={8}
        />
        <CommunityCard 
          title="보험 청구 서류 준비하는 팁" 
          content="보험금 청구할 때 필요한 서류들 정리해봤어요. 병원..."
          author="보험박사"
          time="1시간 전"
          likes={15}
          comments={12}
        />
        <CommunityCard 
          title="근로계약서 작성시 체크리스트" 
          content="아르바이트 계약서 쓸 때 이것만은 꼭 확인하세요!"
          author="노무사"
          time="2시간 전"
          likes={42}
          comments={16}
        />
      </div>

      <button className="fixed bottom-24 right-4 bg-teal-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
        <MessageCircleMore size={24} />
      </button>
    </div>
  );
};

const CommunityCard = ({ title, content, author, time, likes, comments }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{content}</p>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">{author}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-400">{time}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Heart size={16} className="text-gray-400" />
            <span className="text-gray-400">{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} className="text-gray-400" />
            <span className="text-gray-400">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsuranceScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
        <button className="text-gray-500 text-sm">로그인</button>
      </header>

      <h2 className="text-xl font-medium mb-6">진행중인 이벤트</h2>

      <div className="space-y-4">
        <EventCard 
          title="신규 가입 이벤트" 
          period="2024.01.08 - 2024.02.08"
          content="새해 맞이 신규 가입 이벤트! 가입 즉시 계약서 검토 1회 무료"
          image="/api/placeholder/400/200"
          status="진행중"
        />
        <EventCard 
          title="친구 초대 이벤트" 
          period="2024.01.01 - 2024.01.31"
          content="친구 초대하고 프리미엄 서비스 1개월 무료 이용권 받으세요"
          image="/api/placeholder/400/200"
          status="진행중"
        />
        <EventCard 
          title="설문조사 이벤트" 
          period="2024.01.15 - 2024.01.22"
          content="3분만 투자하고 스타벅스 기프티콘 받아가세요!"
          image="/api/placeholder/400/200"
          status="Coming Soon"
        />
      </div>
    </div>
  );
};

const EventCard = ({ title, period, content, image, status }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs ${
            status === '진행중' ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-600'
          }`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-400 mb-2">{period}</p>
        <p className="text-sm text-gray-600">{content}</p>
        <button className="w-full mt-4 py-2 bg-teal-500 text-white rounded-lg text-sm">
          참여하기
        </button>
      </div>
    </div>
  );
};
const NotificationScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
        <button className="text-gray-500 text-sm">로그인</button>
      </header>

      <h2 className="text-xl font-medium mb-6">알림</h2>

      <div className="space-y-4">
        <NotificationCard 
          title="계약서 검토 완료" 
          description="전세 계약서 검토가 완료되었습니다."
          time="방금 전"
        />
        <NotificationCard 
          title="새로운 계약서 템플릿" 
          description="새로운 표준 임대차계약서 템플릿이 추가되었습니다."
          time="2시간 전"
        />
        <NotificationCard 
          title="계약 만료 예정" 
          description="홍길동님의 전세계약이 30일 후 만료됩니다."
          time="1일 전"
        />
      </div>
    </div>
  );
};

const MyPageScreen = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="text-teal-600 font-medium">kyagseo</div>
        <button className="text-gray-500 text-sm">로그인</button>
      </header>

      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <h2 className="font-medium">홍길동님</h2>
            <p className="text-sm text-gray-500">일반 회원</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <MenuItem title="계약 관리" description="내 계약서 관리 및 설정" />
        <MenuItem title="알림 설정" description="알림 및 메시지 설정" />
        <MenuItem title="개인정보 관리" description="개인정보 수정 및 보안 설정" />
        <MenuItem title="이용 안내" description="서비스 이용방법 및 FAQ" />
      </div>
    </div>
  );
};

// Shared Components
const NavButton = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center space-y-1">
      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
        <div className="text-gray-600">{icon}</div>
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm relative">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium mb-2">{title}</h3>
          <p className="text-sm text-gray-500 leading-snug">{description}</p>
        </div>
        <div className="absolute right-4 top-4">
          {icon}
        </div>
      </div>
    </div>
  );
};

const CheckpointCard = ({ title, description, checked }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex gap-4">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${checked ? 'bg-teal-500' : 'border-2 border-gray-300'}`}>
          {checked && <Check size={16} className="text-white" />}
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

const NotificationCard = ({ title, description, time }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

const ResultCard = ({ title, status, description }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-teal-500">{status}</div>
    </div>
  );
};

const MenuItem = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <ChevronLeft className="text-gray-400 rotate-180" size={20} />
    </div>
  );
};

export default App;