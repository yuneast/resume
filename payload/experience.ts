import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '공부선배',
      positions: [
        {
          title: '학원 운영관리 서비스 / 백엔드 개발자',
          startedAt: '2025-08',
          descriptions: [
            '운영 중단 없이 PHP 레거시 모놀리식 시스템을 Service–Repository 구조로 리팩토링하여 코드 복잡도 감소 및 유지보수성 향상',
            'Repository 전반에 Prepared Statement 적용 범위를 확대해 SQL Injection 리스크 제거 및 쿼리 실행 안정성 확보',
            '서브쿼리 조회를 JOIN 중심으로 재설계해 N+1을 제거하고 주요 조회 API 응답을 단축',
            '크론 서버 헬스체크 및 장애 감지 시스템 구축으로 비정상 작업 자동 탐지 및 운영 대응 시간 단축',
            'WebSocket 기반 CID 실시간 연동으로 전화 발신 실패율을 낮추고 CS 이슈를 감소',
            '테스트 자동화와 LLM 기반 장애 로그 분석을 통해 수정 PR 자동 생성을 구축하고 배포 장애 대응 시간을 단축',
          ],
          skillKeywords: [
            'PHP',
            'Kotlin',
            'Spring Boot',
            'JPA',
            'QueryDSL',
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
      title: '코보티스',
      positions: [
        {
          title: '핫딜 알림 서비스 / 백엔드 개발자',
          startedAt: '2025-02',
          endedAt: '2025-06',
          descriptions: [
            '초기 서비스 아키텍처를 설계하고 백엔드 전반(도메인, DB 모델, 배포 구조)을 구축',
            '900만 건 이상 데이터에 대해 (상품 ID, 날짜) 복합 인덱스를 설계하여 조회 API 병목을 제거해 응답 지연을 안정화',
            '크롤링 누적 데이터를 Upsert 집계로 전환해(상품·일 단위) DB 부하와 저장 용량을 감소',
            '단순 가격 변동 알림을 제거하고 역대 최저가 대비 하락폭 계산 로직을 도입해 불필요한 알림 감소 및 사용자 신뢰도 향상',
          ],
          skillKeywords: [
            'Kotlin',
            'Spring Boot',
            'JPA',
            'PostgreSQL',
            'Redis',
            'Docker',
            'Docker Compose',
            'GitHub Actions',
            'AWS CloudWatch',
          ],
        },
        {
          title: '여행 플랫폼 서비스 / 백엔드 개발자',
          startedAt: '2024-03',
          endedAt: '2025-02',
          descriptions: [
            '여행 플랫폼 서비스의 백엔드 아키텍처를 설계하고 FastAPI 기반으로 콘텐츠·검색·추천·알림 API를 구축',
            'LLM 응답 오류로 발생하던 운영 데이터 품질 문제를 해결하기 위해 JSON Schema 검증·재시도·폴백 전략을 설계·적용',
            'LLM 생성 결과에 대해 검증·정제 레이어(필수 필드 검증, 길이 제한, 중복 제거)를 적용해 운영 중 데이터 품질 이슈 및 CS 발생을 감소',
            'Google Maps API 호출 패턴 분석 및 캐싱 전략 적용으로 월 API 비용을 약 90% 절감 (100만 → 10만 원)',
            '후기 및 게시글을 LLM으로 요약/키워드화해 SEO용 메타데이터를 자동 생성하는 파이프라인 구축',
            'Celery 기반 비동기 처리로 LLM 연산·SEO 생성·푸시 발송을 분리하고 Redis를 활용해 작업 상태 및 결과를 관리하여 메인 트랜잭션 지연을 최소화',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'PostgreSQL',
            'Redis',
            'Celery',
            'FCM',
          ],
        },
      ],
    },
    {
      title: '가나다콜',
      positions: [
        {
          title: '고소작업차 실시간 배차 서비스 / 백엔드 개발자',
          startedAt: '2023-06',
          endedAt: '2024-03',
          descriptions: [
            '초기 백엔드 설계 및 핵심 도메인(배차/결제/알림) 구현을 담당하고, 서비스 운영 및 안정화 단계까지 유지보수 수행',
            '배차 처리 과정에서 발생하던 중복 수락 Race Condition을 Redis 분산 락으로 제어해 데이터 정합성 문제 해결',
            '사용자 위치 기반 FCM 푸시 타겟팅 시스템 구축으로 알림 효율 개선',
            '멤버십 자동 갱신 스케줄러를 설계·구현해 운영 자동화 및 수작업 비용 절감',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'SQLAlchemy',
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
          title: '공동주택 관리 서비스 / 백엔드 개발자',
          startedAt: '2022-09',
          endedAt: '2024-02',
          descriptions: [
            'ERP와 이커머스에 분리된 회원 시스템을 JWT 기반 SSO로 통합 구축',
            '레거시 DB를 순차 검증 후 신규 DB로 이관하는 Lazy Migration 전략을 설계·구현하여 무중단 계정 이전 달성',
            '운영 DB 사고 방지를 위해 계정 권한 분리 및 배포 스크립트 Dry-run 검증 단계 도입',
            '노후 PHP 모놀리식 시스템을 FastAPI 기반 API 서버로 재구축하여 신규 기능 개발 리드타임을 단축하고 운영 장애 발생 빈도를 감소',
            '온프레미스 환경을 클라우드로 이전하고 오토스케일링을 구성해 트래픽 변동에 안정적으로 대응',
            'Git-flow 및 코드 리뷰 프로세스를 도입해 팀 협업 표준화',
          ],
          skillKeywords: [
            'Python',
            'PHP',
            'FastAPI',
            'MySQL',
            'Docker',
            'Git',
            'GitHub Actions',
            'AWS CloudWatch',
          ],
        },
      ],
    },
    {
      title: '콘디',
      positions: [
        {
          title: '인플루언서 관리 및 체험단 중개 서비스 / 백엔드 개발자',
          startedAt: '2021-08',
          endedAt: '2022-08',
          descriptions: [
            '초기 서비스 백엔드 아키텍처 설계부터 개발·운영까지 전반을 단독으로 담당하며 MVP를 출시',
            '초기 마케팅 없이 유저 3,000명 규모까지 성장하는 과정에서 서비스 운영 및 성능 안정화 대응',
            '유저 증가에 따라 발생한 성능 저하를 쿼리 구조 개선 및 캐싱 전략 적용으로 해결',
            '크롤링 과정에서 발생하던 DB 락 문제를 배치 단위 및 트랜잭션 범위 재설계로 해소',
            'Gunicorn 워커 설정 튜닝 및 정적 파일 캐싱을 적용해 단일 서버 환경에서 처리량 극대화',
          ],
          skillKeywords: [
            'Python',
            'Django',
            'Django ORM',
            'MySQL',
            'Crawling',
            'System Optimization',
          ],
        },
      ],
    },
    // {
    //   title: '프리랜서',
    //   positions: [
    //     {
    //       title: '다수 외부 프로젝트에서 백엔드 설계·개발·운영 전반 담당',
    //       startedAt: '2021-01',
    //       descriptions: [
    //         '외부 프로젝트에서 백엔드 설계·구현·운영을 담당하며 납기·품질·운영 안정성을 책임',
    //         '부동산 전월세 신고 자동화 시스템 설계 및 구축',
    //         '가상화폐 거래소 오더북 엔진 및 매수·매도 체결 로직 구현',
    //         '온라인 강의 플랫폼 영상 스트리밍 연동 및 결제 기능 개발',
    //         '신차 장기렌트카 견적 비교 알고리즘 설계 및 구현',
    //       ],
    //       skillKeywords: [
    //         'Python',
    //         'PHP',
    //         'JavaScript',
    //         'MySQL',
    //         'PostgreSQL',
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default experience;
