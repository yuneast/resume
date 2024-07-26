import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      id: 0,
      title: '가나다콜',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2024-02',
      endedAt: '2024-07',
      descriptions: [
        'Python FastAPI를 사용한 백엔드 API 개발',
        'MySQL 데이터베이스 설계 및 관리',
        'Flutter를 사용한 모바일 애플리케이션 개발',
        '사용자 인터페이스 및 경험 디자인',
        'Firebase Cloud Messaging을 이용한 실시간 알림 시스템 구축',
        '트래픽 급증에 대비한 시스템 최적화 및 성능 개선',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Dart', 'Flutter', 'MySQL', 'Redis', 'FCM'],
    },
    {
      id: 1,
      title: '유토빌',
      position: 'Python Backend Developr',
      startedAt: '2022-09',
      endedAt: '2024-02',
      descriptions: [
        '기존 PHP 코드를 Python FastAPI로 리팩토링',
        '서비스 무중단으로 데이터베이스 구조 최적화 및 확장성 개선',
        'Docker를 사용하여 컨테이너화된 애플리케이션 환경 설정',
        'GitHub WebHook 및 Jenkins를 이용한 자동화된 배포 파이프라인 구성',
        "SQL 인젝션 취약점 수정으로 보안 강화",
        '이커머스 플랫폼의 주문 처리 및 관리 시스템 개발',
        "JWT 통합 인증(SSO) 개발",
        "관리자 페이지 수익 통계 로직 최적화로 속도 개선"
      ],
      skillKeywords: ['Python', 'FastAPI', 'Django', 'PHP', 'MySQL', 'Jenkins'],
    },
    {
      id: 2,
      title: '콘디',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2022-01',
      endedAt: '2022-06',
      descriptions: [
        'Python과 Django를 사용한 백엔드 API 개발',
        'React를 사용한 프론트엔드 개발',
        '데이터베이스 설계 및 관리',
        '체험단의 활동 및 성과를 기반으로 등급을 산정하는 알고리즘 설계 및 구현',
        '판매 통계 대시보드 개발',
      ],
      skillKeywords: ['Python', 'Django', 'React', 'Nextjs', 'MySQL', 'Jenkins', 'Chartjs'],
    },
    {
      id: 3,
      title: '뉴소프트',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2016-10',
      endedAt: '2021-12',
      descriptions: [
        '1인 프리랜서로 활동',
        '페이스북 그룹 내 자동 홍보 매크로 개발',
        '네이버 밴드 내 자동 글쓰기 프로그램 개발',
        '외주 사이트의 쿼리 성능 최적화',
        '폴리곤 메틱 네트워크 스마트 컨트랙트 개발',
      ],
      skillKeywords: ['C#', 'PHP', 'Python', 'Solidity', 'Go', 'Web3.js', 'JavaScript', 'MySQL'],
    },
  ],
};

export default experience;
