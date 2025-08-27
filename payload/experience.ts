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
        'PHP → Kotlin Spring Boot 기반 MSA 전환 주도',
        'AWS CloudWatch + Claude Code 활용 자동 수정 워크플로우 설계 (GitHub 브랜치/PR 자동화)'
      ],
      skillKeywords: [
        'PHP', 'Java', 'Kotlin', 'Spring Boot', 'Spring Security', 'JPA', 'MySQL', 'Redis', 'Docker', 'AWS'
      ],
    },
    {
      id: 93,
      title: '딜잇',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2025-06',
      descriptions: [
        'Next.js + FastAPI + PostgreSQL 기반 실시간 핫딜 추적 서비스 개발',
        'Celery + Redis 파이프라인으로 5M+ 가격 데이터 실시간 수집/분석',
        'DB/캐시 최적화로 대규모 데이터 1분 내 안정 수집',
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
        'Celery 워커 풀로 100TPS+ API 처리 안정화',
        'PostGIS 공간 인덱스로 지도 쿼리 응답 50% 개선',
        'Google Places API 최적화/캐싱으로 비용 60% 절감',
      ],
      skillKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
    },
    {
      id: 95,
      title: '가나다콜',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2024-02',
      descriptions: [
        'MySQL 인덱스 최적화로 DB 성능 30% 향상',
        'FCM 푸시 재시도로 성공률 92% → 99% 개선',
        'AWS CloudWatch + 오토스케일링으로 트래픽 급증 대응 자동화',
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
        'PHP → FastAPI 마이그레이션으로 유지보수 시간 60% 절감',
        'PostgreSQL 파티셔닝으로 다운타임 2h → 15m 단축',
        'Jenkins + Docker CI/CD 구축, 배포 주기 2주 → 1일 단축',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'CI/CD', 'Jenkins', 'RQ'],
    },
    // {
    //   id: 97,
    //   title: '콘디',
    //   position: 'Founder & Full-Stack Developer',
    //   startedAt: '2021-07',
    //   endedAt: '2022-06',
    //   descriptions: [
    //     'Django REST API 쿼리 최적화로 응답 200ms→120ms(40% 개선)',
    //     '로그 기반 피드백 알고리즘으로 사용자 등급 산정 정밀도 82%→93%',
    //     '누적 회원 3,000명 확보',
    //   ],
    //   skillKeywords: ['Python', 'Django', 'React', 'Next.js', 'MySQL', 'Jenkins', 'Chart.js'],
    // },
    // {
    //   id: 98,
    //   title: 'SportsBet 경기 데이터 수집·파싱 플랫폼(호주 멜버른)',
    //   position: 'Backend Developer',
    //   startedAt: '2020-06',
    //   endedAt: '2021-02',
    //   descriptions: [
    //     'Python BeautifulSoup/Requests 기반 크롤러 설계로 주요 경기 데이터 자동 수집',
    //     'PostgreSQL 파티셔닝·스키마 최적화로 데이터 적재 3배 향상',
    //     'Celery 워커로 1분 단위 실시간 경기 업데이트 안정화',
    //     '일일 10만 건 이상 경기 데이터 분 단위 수집',
    //   ],
    //   skillKeywords: ['Python', 'BeautifulSoup', 'Requests', 'Celery', 'PostgreSQL', 'Redis'],
    // },
    // {
    //   id: 99,
    //   title: '뉴소프트',
    //   position: 'Founder & Full-Stack Developer',
    //   startedAt: '2016-10',
    //   endedAt: '2020-06',
    //   descriptions: [
    //     '1인 프리랜서로 다양한 웹/앱 프로젝트 완수 및 운영',
    //     'Python, PHP, C#, Solidity 등 다양한 언어로 커머스/자동화/블록체인 개발 경험',
    //     '고객 수주·기획·개발·배포 전 과정을 직접 리딩',
    //   ],
    //   skillKeywords: ['C#', 'PHP', 'Python', 'Solidity', 'Go', 'Web3.js', 'JavaScript', 'MySQL'],
    // },
    
  ],
};

export default experience;
