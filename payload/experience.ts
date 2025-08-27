import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '공부선배',
      positions: [
        {
          title: 'Backend Developer',
          startedAt: '2025-07',
          descriptions: [
            'PHP → Kotlin(Spring Boot) 전환을 통해 성능 및 유지보수성 개선',
            '배포 환경 오류 실시간 탐지·자동 수정 (CloudWatch + GitHub Actions + Claude Code)',
          ],
          skillKeywords: [
            'PHP',
            'Java',
            'Kotlin',
            'Spring Boot',
            'Spring Security',
            'JPA',
            'MySQL',
            'Redis',
            'Docker',
            'AWS',
          ],
        },
      ],
    },
    {
      title: '딜잇',
      positions: [
        {
          title: 'Founder & Full-Stack Developer',
          startedAt: '2025-06',
          descriptions: [
            'Next.js + FastAPI + PostgreSQL 기반 실시간 핫딜 추적 서비스 개발',
            'Celery + Redis 파이프라인으로 5M+ 가격 데이터 실시간 수집/분석',
            'DB/캐시 최적화로 대규모 데이터 1분 내 안정 수집',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'Next.js',
            'PostgreSQL',
            'Redis',
            'Celery',
            'FCM',
            'Docker',
            'SSE',
          ],
        },
      ],
    },
    {
      title: '코보티스',
      positions: [
        {
          title: 'Python Backend Developer',
          startedAt: '2024-10',
          endedAt: '2025-06',
          descriptions: [
            'Celery 워커 풀로 100TPS+ API 처리 안정화',
            'PostGIS 공간 인덱스로 지도 쿼리 응답 50% 개선',
            'Google Places API 최적화/캐싱으로 비용 60% 절감',
          ],
          skillKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
        },
      ],
    },
    {
      title: '가나다콜',
      positions: [
        {
          title: 'Founder & Full-Stack Developer',
          startedAt: '2024-02',
          descriptions: [
            'MySQL 인덱스 최적화로 DB 성능 30% 향상',
            'FCM 푸시 재시도로 성공률 92% → 99% 개선',
            'AWS CloudWatch + 오토스케일링으로 트래픽 급증 대응 자동화',
          ],
          skillKeywords: ['Python', 'FastAPI', 'Dart', 'Flutter', 'MySQL', 'Redis', 'FCM', 'AWS'],
        },
      ],
    },
    {
      title: '유토빌',
      positions: [
        {
          title: 'Python Backend Developer',
          startedAt: '2022-09',
          endedAt: '2024-02',
          descriptions: [
            'PHP → FastAPI 마이그레이션으로 유지보수 시간 60% 절감',
            'PostgreSQL 파티셔닝으로 다운타임 2h → 15m 단축',
            'Jenkins + Docker CI/CD 구축, 배포 주기 2주 → 1일 단축',
          ],
          skillKeywords: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'CI/CD', 'Jenkins', 'RQ'],
        },
      ],
    },
  ],
};

export default experience;
