import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      id: 95,
      title: '코보티스',
      position: 'Python Backend Developer',
      startedAt: '2024-10',
      descriptions: [
        'Celery 워커 풀과 Redis 브로커를 활용해 단일 웹 서버(2vCPU, 4GB RAM) 환경에서 100TPS 처리 안정화',
        'Celery 비동기 태스크로 OpenAI GPT-4o-mini API 호출 및 JSON 일괄 생성 처리, 파싱 오류율 90% 감소',
        'PostgreSQL PostGIS 공간 인덱스를 활용한 지도 기반 쿼리로 응답 속도 50% 개선',
        'Google Places API 호출 최적화 및 캐싱 전략 도입으로 API 비용 60% 절감',
      ],
      skillKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    },
    {
      id: 96,
      title: '가나다콜',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2024-02',
      endedAt: '2024-07',
      descriptions: [
        'Redis 캐시 도입 및 비동기 I/O 최적화를 통해 FastAPI 기반 백엔드 API 응답 시간을 평균 120ms → 75ms로 38% 단축',
        '슬로우 쿼리 로그 분석 후 MySQL 인덱스 추가 및 복잡 쿼리 구조 분할로 DB 성능 30% 향상',
        '앱 초기 화면에 스플래시 이미지 프리로딩 및 코드 스플리팅을 적용하여 Flutter 앱 로딩 속도 4s → 2s 개선',
        '실패 알림 재시도 로직 및 백오프(backoff) 전략 구현으로 FCM 푸시 알림 성공률 92% → 99%로 안정성 강화',
        'AWS CloudWatch 경보 설정 및 EC2 오토스케일링 정책 적용으로 트래픽 급증 시 자동 대응 체계 구축',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Dart', 'Flutter', 'MySQL', 'Redis', 'FCM'],
    },
    {
      id: 97,
      title: '유토빌',
      position: 'Python Backend Developer',
      startedAt: '2022-09',
      endedAt: '2024-02',
      descriptions: [
        '엔드포인트 매핑 자동화 스크립트 작성 및 단위 테스트 추가로 PHP → FastAPI 마이그레이션 수행, 유지보수 시간 주 10h → 4h로 60% 절감',
        '테이블 파티셔닝 및 중복 인덱스 제거 전략 수립으로 PostgreSQL 마이그레이션 다운타임 2시간 → 15분 단축',
        'Jenkins Pipeline 및 Docker Compose 설정으로 CI/CD 파이프라인 구축, 배포 주기 2주 → 1일로 단축',
        'ORM 파라미터 바인딩 강제 설정 및 정적 분석 도구 도입으로 SQL 인젝션 취약점 12건 전수 점검 후 100% 패치',
        '비동기 작업 큐(RQ) 도입 및 배치 처리 스케줄러 구축으로 주문 처리량 초당 50건 → 120건으로 140% 향상',
        'OAuth2 플로우와 Redis 토큰 캐싱을 활용한 JWT 기반 SSO 구현으로 로그인 지연 시간 800ms → 200ms로 75% 개선',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'CI/CD', 'Jenkins'],
    },
    {
      id: 98,
      title: '콘디',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2022-01',
      endedAt: '2022-06',
      descriptions: [
        'select_related/prefetch_related 적용 및 쿼리 최적화로 Django REST API 응답 시간 200ms → 120ms로 40% 개선',
        '코드 스플리팅 및 SSR 캐싱 설정을 통해 Next.js 초기 렌더링 속도 3s → 1.5s 단축',
        'Redis 캐시 레이어 및 materialized view 도입으로 데이터 조회 속도 60% 향상',
        '로그 데이터 기반 피드백 루프 개발로 사용자 등급 산정 알고리즘 정확도 82% → 93% 정밀도 개선',
        'Chart.js 라이브러리 최적화 및 데이터 샘플링 적용으로 판매 통계 대시보드 로드 시간 5s → 2s 개선',
      ],
      skillKeywords: ['Python', 'Django', 'React', 'Next.js', 'MySQL', 'Jenkins', 'Chart.js'],
    },
    {
      id: 99,
      title: '뉴소프트',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2016-10',
      endedAt: '2021-12',
      descriptions: ['1인 프리랜서'],
      skillKeywords: ['C#', 'PHP', 'Python', 'Solidity', 'Go', 'Web3.js', 'JavaScript', 'MySQL'],
    },
  ],
};

export default experience;
