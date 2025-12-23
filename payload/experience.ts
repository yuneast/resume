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
            'PHP 기반 레거시 모놀리식 시스템을 Service–Repository 아키텍처로 리팩토링하여 계층 분리 및 코드 복잡도 감소',
            'Repository 전반에 Prepared Statement를 전면 도입해 SQL Injection 리스크 제거 및 쿼리 실행 안정성 확보',
            '서브쿼리 기반 조회 로직을 JOIN 중심 구조로 재설계하여 N+1 문제 제거 및 주요 API 응답 시간 단축',
            '크론 서버 헬스체크 및 장애 감지 시스템 구축으로 비정상 작업 자동 탐지 및 운영 대응 시간 단축',
            'WebSocket 기반으로 CID 시스템과 실시간 연동하여 인터넷 전화 발신 워크플로우 안정화',
            'PHPUnit + Mock 기반 테스트 환경 구축으로 회귀 테스트 자동화 및 배포 안정성 향상',
            '장애 로그를 분석해 수정 PR을 자동 생성하는 LLM 기반 운영 자동화 파이프라인 설계 및 구현',
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
            '초기 서비스 아키텍처 설계 및 백엔드 시스템 구축을 주도하고, 운영 안정화 단계까지 책임지고 유지보수 수행',
            '900만 건 이상 가격 이력 데이터를 대상으로 쿼리 패턴 분석 후 (상품 ID, 날짜) 복합 인덱스를 설계해 주요 조회 API 성능 개선',
            '대량 누적되는 크롤링 데이터를 Upsert 기반 집계 구조로 재설계해 상품당 하루 1건의 최저가만 유지, DB 부하 및 저장 용량 감소',
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
            'LLM 응답이 기대한 스키마를 벗어나거나 필수 데이터가 누락되는 문제를 해결하기 위해 JSON Schema 기반 출력 강제, 재시도 및 규칙 기반 폴백 전략을 설계하여 데이터 생성 안정성 확보',
            'LLM 생성 결과에 대해 검증·정제 레이어(필수 필드 검증, 길이 제한, 중복 제거)를 적용해 운영 중 데이터 품질 이슈 및 CS 발생을 감소',
            'Google Maps API 호출 패턴을 분석하고 좌표·Place ID 기준 캐싱, 요청 중복 제거, 지오코딩 최소화 전략을 적용해 월 API 비용을 약 100만원 수준에서 10만원 수준으로 절감',
            '사용자 작성 후기·게시글을 LLM으로 요약, 키워드 추출, 메타데이터(Title/Description) 생성하여 검색엔진 노출을 개선하는 SEO 자동화 파이프라인을 구축',
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
            '노후 PHP 시스템을 FastAPI 기반 API 서버로 재구축해 유지보수성과 개발 생산성 개선',
            '온프레미스 환경을 클라우드로 이전하고 오토스케일링을 구성해 트래픽 변동 대응력 확보',
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
            '초기 서비스 백엔드 아키텍처 설계부터 개발·운영까지 전반을 책임지고 MVP를 출시',
            '초기 마케팅 없이 유저 3,000명 확보(서비스 운영 관점에서 트래픽 증가 대응 경험)',
            '크롤링 과정에서 발생하던 DB 락 문제를 해결하기 위해 배치 단위 및 트랜잭션 범위 재설계',
            'Gunicorn 워커 설정 튜닝 및 정적 파일 캐싱 적용으로 단일 서버 환경에서 처리량 극대화',
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
    {
      title: '뉴소프트',
      positions: [
        {
          title: '1인 프리랜서',
          startedAt: '2021-01',
          descriptions: [
            '도메인 요구사항 분석부터 설계·구현·운영까지 End-to-End로 수행하며 납기 및 품질을 책임',
            '부동산 전월세 신고 자동화 시스템 설계 및 구축',
            '가상화폐 거래소 오더북 엔진 및 매수·매도 체결 로직 구현',
            '온라인 강의 플랫폼 영상 스트리밍 연동 및 결제 기능 개발',
            '신차 장기렌트카 견적 비교 알고리즘 설계 및 구현',
          ],
          skillKeywords: [
            'Python',
            'PHP',
            'JavaScript',
            'MySQL',
            'PostgreSQL',
          ],
        },
      ],
    },
  ],
};

export default experience;
