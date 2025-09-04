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
          title: 'Spring Boot API 리플랫폼',
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
          title: '핫딜 알림 플랫폼 구축',
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
          title: '선착순 수주 플랫폼 구축',
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
          title: '레거시 리팩토링 및 클라우드 마이그레이션',
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
    {
      title: '뉴소프트',
      positions: [
        {
          title: '코인 선물 거래소 구축',
          startedAt: '2023-03',
          endedAt: '2023-08',
          descriptions: [
            'WebSocket 게이트웨이와 Redis Pub/Sub로 시세·체결 이벤트를 브로드캐스트, 폴링 제거로 실시간 처리 부하 분산',
            '주문/포지션 API에 idempotency 키와 비동기 확인 큐 적용, 재시도에도 중복 체결 방지',
            '잔고·포지션 갱신을 Redis Lua 스크립트로 원자화, 동시 업데이트 경합 감소',
            '거래/청산 로그를 파티션 테이블로 분리해 장기 로그 보존 비용과 조회 부하 최적화',
          ],
          skillKeywords: [
            'Laravel',
            'Node.js',
            'Redis',
            'MySQL',
            'WebSocket',
            'Docker',
          ],
        },
        {
          title: '온라인 강의 플랫폼 구축',
          startedAt: '2022-09',
          endedAt: '2022-11',
          descriptions: [
            '강의/수강/진도 스키마 정규화 및 인덱싱, 강의 목록·진도 집계 쿼리 병목 제거',
            '강의 썸네일·VOD 서빙에 캐시 레이어 도입, CDN 캐시 무효화 훅으로 원본 부하 감소',
            '업로드 파이프라인에 대용량 처리용 비동기 워커 구성, 트랜스코딩 큐 적체 방지',
          ],
          skillKeywords: [
            'PHP (Laravel)',
            'MySQL',
            'Redis',
            'S3',
          ],
        },
        {
          title: '신차 장기렌트카 견적 플랫폼 구축',
          startedAt: '2022-02',
          endedAt: '2022-04',
          descriptions: [
            '차종/옵션/프로모션을 규칙 엔진으로 모델링, 계산 경로를 캐시해 반복 견적 부하 흡수',
            '외부 견적/재고 API 호출을 비동기화하고 서킷브레이커·버스트 제한으로 스파이크 트래픽 보호',
            '야간 배치로 가격/프로모션 스냅샷 갱신, 온라인 트래픽과 오프라인 동기화 분리',
          ],
          skillKeywords: [
            'PHP (Laravel)',
            'Redis',
            'MySQL',
          ],
        },
      ],
    },
  ],
};

export default experience;
