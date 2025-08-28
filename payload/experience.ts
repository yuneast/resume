//기술적 구체성 과 부하 분산 강조해서 전체를 다시 해줘. 수치는 없어도 돼.

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
          startedAt: '2025-08',
          descriptions: [
            '레거시 PHP 모놀리식을 Spring Boot API 서버로 리플랫폼, Strangler 패턴 기반 점진적 전환으로 서비스 중단 없이 마이그레이션 완료',
            'CloudWatch 로그 기반 오류 탐지 → GitHub Actions → Claude Code 연동으로 자동 수정·PR 파이프라인 구축, 장애 대응 속도 및 수동 핫픽스 의존도 감소',
          ],
          skillKeywords: [
            'Spring Boot',
            'Kotlin/Java',
            'JPA(Hibernate)',
            'MySQL',
            'Redis',
            'Docker',
            'GitHub Actions',
            'AWS CloudWatch',
          ],
        },
      ],
    },
    {
      title: '딜잇',
      positions: [
        {
          title: 'Founder & Full-Stack Developer',
          startedAt: '2024-10',
          endedAt: '2025-06',
          descriptions: [
            '대규모 상품 수집 파이프라인 및 핫딜 탐지 알고리즘 운영, 룰 기반 검증 로직으로 오탐/미탐 최소화',
            'Celery + Redis 기반 배치 파이프라인 확장 및 워커 오토스케일링으로 피크 타임 큐 적체 방지',
            'Redis 캐싱과 PostgreSQL 파티셔닝으로 조회 부하를 분산하고 병목 구간 제거',
            'SSE(Server-Sent Events)로 실시간 알림을 푸시, 클라이언트 폴링 부하 제거 및 이벤트 전달 지연 최소화',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'PostgreSQL(Partitioning)',
            'Redis',
            'Celery',
            'Docker',
            'FCM',
            'SSE',
          ],
        },
      ],
    },
    {
      title: '가나다콜',
      positions: [
        {
          title: 'Founder & Full-Stack Developer',
          startedAt: '2023-11',
          endedAt: '2024-09',
          descriptions: [
            '선착순 수주 도메인 모델 설계 및 트랜잭션 제어로 동시 다발 요청 상황에서도 데이터 일관성 확보',
            'Redis 분산 락과 원자적 트랜잭션으로 중복 수주 발생 제거, 동시성 충돌 제어 강화',
            'Celery 기반 비동기 처리로 대량 FCM 알림 지연을 줄여 실시간성 보장',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'MySQL',
            'Redis',
            'Celery',
            'FCM',
          ],
        },
      ],
    },
    {
      title: '유토빌',
      positions: [
        {
          title: 'Backend Developer',
          startedAt: '2022-09',
          endedAt: '2024-02',
          descriptions: [
            '레거시 PHP 서버를 FastAPI 기반 API 서버로 리팩토링, 안정성과 유지보수성 개선',
            'PostgreSQL 파티셔닝 및 인덱스 최적화로 대규모 데이터 조회 성능 향상 및 스토리지 자원 효율화',
            'GitHub Actions + Jenkins CI/CD 파이프라인 구축으로 배포 자동화 및 장애 복구 리드타임 단축',
            '온프레미스 워크로드를 클라우드 환경으로 이전해 확장성과 가용성 강화',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'PostgreSQL',
            'Docker',
            'CI/CD(Jenkins·GitHub Actions)',
          ],
        },
      ],
    },
  ],
};

export default experience;
