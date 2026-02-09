import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)울림',
      positions: [
        {
          title: '백엔드 개발자',
          startedAt: '2026-01',
          descriptions: [
            '오늘 첫출근',
          ],
        },
      ],
    },
    {
      title: '(주)공부선배',
      positions: [
        {
          title: '학원 운영관리 서비스 / 백엔드 개발자',
          startedAt: '2025-08',
          endedAt: '2025-12',
          descriptions: [
            'PHP 레거시 코드를 Service-Repository 구조로 리팩토링',
            'Java(Spring Boot) 인증 서버 분리, PHP 시스템과 하이브리드 인증 연동',
            '전체 쿼리 Prepared Statement 적용, 데이터 조회 구조 개선',
            '크론 서버 헬스체크, 장애 감지 자동화',
            'WebSocket 기반 CID(발신번호 표시) 연동으로 실시간 상담 시스템 구현',
            'LLM 기반 로그 분석, Pull Request 자동 생성으로 배포 프로세스 개선',
          ],
          achievements: [
            '슬로우 쿼리 0건 수준 유지, DB 부하 감소',
            'SQL Injection 보안 리스크 차단',
            '장애 감지 자동화로 크론 서버 장애 대응 시간 50% 이상 단축',
            'LLM 기반 자동화로 코드 리뷰, 이슈 추적 소요 시간 감소',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'JPA',
            'QueryDSL',
            'PHP',
            'MySQL',
            'Redis',
            'Docker',
            'AWS CloudWatch',
          ],
        },
      ],
    },
    {
      title: '(주)코보티스',
      positions: [
        {
          title: '핫딜 알림 서비스 / 백엔드 개발자',
          startedAt: '2025-02',
          endedAt: '2025-06',
          descriptions: [
            '핫딜 알림 서비스 백엔드 아키텍처, 도메인 모델 설계',
            'Redis 캐싱, 쿼리 튜닝으로 대용량 핫딜 데이터 조회 API 성능 개선',
            '수천만 건 크롤링 데이터 집계 로직을 Upsert 구조로 전환, DB 쓰기 부하 감소',
            '사용자 맞춤형 알림 필터링, 트리거 로직 구현',
          ],
          achievements: [
            '900만 건 이상 데이터 조회 API 응답 시간 0.3~0.5초 이내 유지',
            'DB 쓰기 트래픽, 스토리지 사용량 30% 이상 절감',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'JPA',
            'QueryDSL',
            'PostgreSQL',
            'Redis',
            'Docker',
          ],
        },
        {
          title: '여행 플랫폼 서비스 / 백엔드 개발자',
          startedAt: '2024-03',
          endedAt: '2025-02',
          descriptions: [
            'FastAPI 기반 여행 플랫폼 백엔드 설계, 핵심 API 개발',
            'LLM 생성 데이터 검증, 데이터 정제 레이어 설계',
            'Celery 기반 비동기 처리로 LLM 연동, SEO 최적화',
          ],
          achievements: [
            'Google Maps API 캐싱 최적화로 월 API 비용 90% 절감',
            'LLM 응답 검증 로직 추가로 데이터 오염 방지, CS 발생률 감소',
            '비동기 처리 분리로 사용자 응답 속도 개선',
          ],
          skillKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'FCM', 'LLM Integration'],
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
            '실시간 배차 매칭 백엔드 설계, 주문·배차 도메인 로직 구현',
            'Redis Distributed Lock으로 동시 배차 요청 처리, 데이터 정합성 제어',
            '위치 기반 데이터 처리, FCM 실시간 푸시 알림',
          ],
          achievements: [
            '분산 락 도입으로 배차 중복 수락 Race Condition 해결',
            '위치 기반 알림 최적화로 불필요한 알림 감소, 기사 배차 수락률 향상',
            '운영 업무 스케줄러 자동화로 수작업 공수 70% 이상 절감',
          ],
          skillKeywords: ['Java', 'Spring Boot', 'JPA', 'QueryDSL', 'MySQL', 'Redis'],
        },
      ],
    },
    {
      title: '(주)유토빌',
      positions: [
        {
          title: '공동주택 관리 서비스 / 백엔드 개발자',
          startedAt: '2022-09',
          endedAt: '2024-02',
          descriptions: [
            'JWT 기반 통합 인증(SSO) 시스템 구축, 서비스 간 사용자 인증 통합',
            '레거시 PHP 모놀리식 시스템을 FastAPI 기반 마이크로서비스로 전환',
            'Lazy Migration 전략으로 대규모 운영 데이터 이전',
          ],
          achievements: [
            '분리된 회원 체계 통합으로 인증 보안 강화',
            'Lazy Migration으로 서비스 다운타임 없이 대규모 계정 정보 이전',
          ],
          skillKeywords: ['Python', 'PHP', 'FastAPI', 'MySQL', 'Docker', 'GitHub Actions'],
        },
      ],
    },
    {
      title: '콘디',
      positions: [
        {
          title: '인플루언서 중개 플랫폼 / 백엔드 개발자',
          startedAt: '2021-08',
          endedAt: '2022-08',
          descriptions: [
            '인플루언서 관리, 체험단 중개 플랫폼 백엔드 단독 개발',
            'API 성능 모니터링, 쿼리 최적화 등 서버 튜닝',
            '크롤링 기반 인플루언서 활동 지수 산출 모듈 개발',
          ],
          achievements: [
            '백엔드 단독 개발로 MVP 출시, 가입자 3,000명 규모까지 운영',
            '쿼리 최적화, 캐싱 적용으로 트래픽 급증 시에도 응답 속도 유지',
          ],
          skillKeywords: ['Python', 'Django', 'MySQL', 'Crawling'],
        },
      ],
    },
    {
      title: '뉴소프트',
      positions: [
        {
          title: '부동산 전월세 신고 자동화 서비스',
          startedAt: '2023-04',
          endedAt: '2023-05',
          descriptions: [
            'Python 기반 AI CAPTCHA 해석으로 부동산 전월세 신고 자동화',
            '이미지 전처리, 모델 추론, 결과 검증 단계 분리',
            '수작업 신고 프로세스 자동화',
          ],
          achievements: [
            '전월세 신고 처리 시간 80% 단축',
            'CAPTCHA 실패 대비 재시도, 검증 로직 구현',
          ],
          skillKeywords: ['Python', 'OCR', 'TensorFlow'],
        },
        {
          title: '가상화폐 선물 거래소',
          startedAt: '2022-01',
          endedAt: '2022-12',
          descriptions: [
            'PHP Laravel 기반 가상화폐 선물 거래소 백엔드 개발',
            '주문, 체결, 포지션 관리 등 거래 도메인 로직 구현',
            '주문 상태 관리, 예외 처리 로직 구현',
          ],
          achievements: [
            '주문, 체결 로직 분리로 거래 처리 안정성 확보',
          ],
          skillKeywords: ['PHP', 'Laravel', 'MySQL', 'Next.js', 'Redis', 'WebSocket'],
        },
        {
          title: 'Polygon 네트워크 DeFi Farm',
          startedAt: '2021-09',
          endedAt: '2021-12',
          descriptions: [
            'Next.js, Solidity로 Polygon 네트워크 기반 DeFi Farm 구축',
            '스테이킹, 보상 분배 스마트 컨트랙트 구현',
            '프론트엔드-스마트 컨트랙트 트랜잭션 연동',
          ],
          achievements: [
            '스마트 컨트랙트 기반 자산 관리 로직 구현',
          ],
          skillKeywords: ['Next.js', 'Solidity', 'Polygon', 'Web3'],
        },
        {
          title: '마케팅 자동화 도구',
          startedAt: '2018-02',
          endedAt: '2019-06',
          descriptions: [
            'C# 기반 네이버 밴드 자동 글쓰기 프로그램 개발',
            'C# 기반 페이스북 자동 글쓰기 매크로 개발',
            'C# 기반 카카오톡 자동 메시지 발송 프로그램 개발',
          ],
          achievements: [
            '반복 마케팅 업무 자동화로 운영 공수 70% 절감',
          ],
          skillKeywords: ['C#', '.NET', 'Selenium'],
        },
        {
          title: '온라인 강의 플랫폼',
          startedAt: '2017-08',
          endedAt: '2017-12',
          descriptions: [
            'GNUBoard 기반 온라인 강의 플랫폼 구축, 커스터마이징',
            '영상 스트리밍, 결제 모듈 연동',
          ],
          achievements: [
            '강의 등록, 결제, 수강 플로우 구조화',
          ],
          skillKeywords: ['PHP', 'GNUBoard', 'PG'],
        },
        {
          title: '신차 장기렌트카 견적 비교 플랫폼',
          startedAt: '2017-01',
          endedAt: '2017-06',
          descriptions: [
            'React 기반 장기렌트카 견적 비교 백엔드, 견적 산출 로직 구현',
            '다수 렌트사 조건 비교, 정규화하는 견적 계산 알고리즘 개발',
            '외부 데이터 연동 고려한 확장 가능한 API 구조 설계',
          ],
          achievements: [
            '견적 조건 표준화로 신규 렌트사 연동 개발 시간 50% 감소',
          ],
          skillKeywords: ['React', 'Node.js', 'TypeScript'],
        },
      ],
    },
  ],
};

export default experience;
