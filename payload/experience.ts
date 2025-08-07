import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      id: 92,
      title: '공부선배',
      position: 'Backend Developer',
      startedAt: '2025-07',
      descriptions: [
        '작성중'
      ],
      skillKeywords: [
        'Java', 'Spring Boot', 'Spring Security', 'JPA', 'MySQL', 'Redis', 'Docker', 'AWS'
      ],
    },
    {
      id: 93,
      title: '딜잇',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2025-06',
      endedAt: '2025-07',
      descriptions: [
        'Next.js, FastAPI, PostgreSQL 기반 실시간 핫딜 추적 서비스 기획 및 개발',
        'Celery + Redis 기반 파이프라인 구축으로 500만+ 가격 데이터 실시간 수집·분석',
        'SSE, FCM을 활용한 실시간 알림 및 사용자 개인화 이벤트 시스템 구현',
        'PostgreSQL/Redis 최적화로 1분 내 대량 데이터 안정 수집',
      ],
      skillKeywords: [
        'Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Redis', 'Celery', 'FCM', 'Docker', 'SSE'
      ],
    },
    {
      id: 94,
      title: '코보티스',
      position: 'Python Backend Developer',
      startedAt: '2024-10',
      endedAt: '2025-06',
      descriptions: [
        'Celery 워커 풀 및 Redis 브로커로 100TPS+ API 처리 안정화',
        'GPT-4o-mini API 비동기 호출 및 JSON 일괄 파싱, 파싱 오류율 90% 감소',
        'PostGIS 공간 인덱스 기반 지도 쿼리 응답 50% 개선',
        'Google Places API 최적화·캐싱으로 API 비용 60% 절감',
        'AWS S3/CloudFront로 정적 자산 배포 지연 70% 감소',
      ],
      skillKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
    },
    {
      id: 95,
      title: '가나다콜',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2024-02',
      endedAt: '2024-09',
      descriptions: [
        'FastAPI + Redis 캐시 도입, 평균 응답시간 120ms→75ms로 38% 개선',
        'MySQL 인덱스 최적화, 복잡 쿼리 구조 개선으로 DB 성능 30% 향상',
        'Flutter 앱 코드 스플리팅·스플래시 프리로딩으로 초기 로딩 4s→2s 단축',
        'FCM 푸시 알림 백오프·재시도 로직으로 성공률 92%→99% 상승',
        'AWS CloudWatch/EC2 오토스케일링으로 트래픽 급증 자동 대응',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Dart', 'Flutter', 'MySQL', 'Redis', 'FCM', 'AWS'],
    },
    {
      id: 96,
      title: '유토빌',
      position: 'Python Backend Developer',
      startedAt: '2022-09',
      endedAt: '2024-02',
      descriptions: [
        'PHP→FastAPI 엔드포인트 자동 변환 스크립트 및 테스트 자동화로 유지보수 시간 60% 절감',
        'PostgreSQL 테이블 파티셔닝/중복 인덱스 제거로 마이그레이션 다운타임 2h→15m 단축',
        'Jenkins+Docker Compose 기반 CI/CD 파이프라인 구축, 배포 주기 2주→1일 단축',
        'ORM 파라미터 바인딩 및 정적 분석으로 SQL 인젝션 100% 패치',
        'RQ 작업 큐 및 스케줄러 도입으로 주문 처리량 140% 향상(초당 50→120건)',
        'OAuth2+Redis 캐싱 기반 SSO로 로그인 지연 800ms→200ms로 75% 개선',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'CI/CD', 'Jenkins', 'RQ'],
    },
    {
      id: 97,
      title: '콘디',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2021-07',
      endedAt: '2022-06',
      descriptions: [
        'Django REST API 쿼리 최적화로 응답 200ms→120ms(40% 개선)',
        'Next.js SSR 캐싱·코드 스플리팅으로 초기 렌더링 3s→1.5s 단축',
        'Redis 캐시 및 materialized view로 데이터 조회 60% 향상',
        '로그 기반 피드백 알고리즘으로 사용자 등급 산정 정밀도 82%→93%',
        'Chart.js 최적화로 대시보드 로드 5s→2s 개선',
        '누적 회원 3,000명 확보',
      ],
      skillKeywords: ['Python', 'Django', 'React', 'Next.js', 'MySQL', 'Jenkins', 'Chart.js'],
    },
    {
      id: 98,
      title: 'SportsBet 경기 데이터 수집·파싱 플랫폼(호주 멜버른)',
      position: 'Backend Developer',
      startedAt: '2020-06',
      endedAt: '2021-02',
      descriptions: [
        'Python BeautifulSoup/Requests 기반 크롤러 설계로 주요 경기 데이터 자동 수집',
        'PostgreSQL 파티셔닝·스키마 최적화로 데이터 적재 3배 향상',
        'Celery 워커로 1분 단위 실시간 경기 업데이트 안정화',
        'Redis 캐시로 API 응답 지연 500ms 이하 유지',
        '일일 10만 건 이상 경기 데이터 분 단위 수집',
      ],
      skillKeywords: ['Python', 'BeautifulSoup', 'Requests', 'Celery', 'PostgreSQL', 'Redis'],
    },
    {
      id: 99,
      title: '뉴소프트',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2016-10',
      endedAt: '2020-06',
      descriptions: [
        '1인 프리랜서로 다양한 웹/앱 프로젝트 완수 및 운영',
        'Python, PHP, C#, Solidity 등 다양한 언어로 커머스/자동화/블록체인 개발 경험',
        '고객 수주·기획·개발·배포 전 과정을 직접 리딩',
      ],
      skillKeywords: ['C#', 'PHP', 'Python', 'Solidity', 'Go', 'Web3.js', 'JavaScript', 'MySQL'],
    },
    
  ],
};

export default experience;
