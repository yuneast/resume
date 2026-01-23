import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)공부선배',
      positions: [
        {
          title: '학원 운영관리 서비스 / 백엔드 개발자',
          startedAt: '2025-08',
          endedAt: '2025-12',
          descriptions: [
            'PHP 레거시 모놀리식 아키텍처를 Service–Repository 구조로 리팩토링하여 유지보수성 향상',
            'Java(Spring Boot) 기반 인증 서버 분리 및 PHP 시스템과의 하이브리드 인증 연동 구조 설계',
            '전체 쿼리에 Prepared Statement 적용 및 데이터 조회 구조 개선으로 보안성 및 성능 최적화',
            '안정적인 서비스 운영을 위한 크론 서버 헬스체크 및 실시간 장애 감지 파이프라인 구축',
            'WebSocket 기반 CID(발신번호 표시) 연동 기능을 통한 실시간 상담 업무 환경 구현',
            'LLM 기반 로그 분석 및 Pull Request 자동 생성 자동화로 배포 장애 대응 프로세스 단축',
          ],
          achievements: [
            '운영 환경 내 슬로우 쿼리 발생 빈도 0건 수준 유지 및 DB 부하 감소',
            'SQL Injection 보안 리스크 원천 차단 및 쿼리 실행 안정성 확보',
            '장애 감지 자동화 도입으로 크론 서버 장애 인지 및 대응 시간 50% 이상 단축',
            'LLM 기반 자동 분석 파이프라인 도입을 통한 코드 리뷰 및 이슈 추적 효율성 극대화',
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
            '신규 핫딜 알림 서비스의 백엔드 아키텍처 및 도메인 데이터 모델 설계 주도',
            'Redis 캐싱 전략 및 쿼리 튜닝을 통한 대용량 핫딜 데이터 조회 API 성능 개선',
            '수천만 건 규모의 크롤링 데이터 집계 로직을 Upsert 구조로 전환하여 DB 쓰기 부하 최적화',
            '사용자 맞춤형 알림 송출을 위한 정교화된 필터링 및 알림 트리거 로직 구현',
          ],
          achievements: [
            '900만 건 이상의 대용량 데이터 조회 API 응답 시간을 0.3~0.5초 이내로 유지',
            '데이터 집계 구조 최적화를 통해 DB 쓰기 트래픽 및 스토리지 사용량 유의미하게 절감',
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
            'FastAPI 기반의 여행 플랫폼 백엔드 시스템 설계 및 핵심 API 기능 개발',
            'LLM 생성 데이터의 신뢰성 확보를 위한 응답 검증 및 데이터 정제(Cleaning) 레이어 설계',
            'Celery 기반 비동기 처리를 활용한 LLM 연동 및 SEO 최적화 파이프라인 구축',
          ],
          achievements: [
            'Google Maps API 캐싱 전략 및 최적화로 월 API 호출 비용 약 90% 절감',
            'LLM 응답 오류로 인한 데이터 오염 방지 및 운영 CS 발생률 감소',
            '메인 트랜잭션과 무거운 비동기 로직 분리로 사용자 체감 응답 속도 대폭 향상',
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
            '실시간 배차 매칭 시스템 백엔드 설계 및 주문·배차 핵심 도메인 로직 구현',
            'Redis Distributed Lock을 활용한 다중 배차 요청 동시성 제어 및 데이터 정합성 보장',
            '위치 기반 데이터 처리 및 FCM을 활용한 실시간 푸시 알림 타겟팅 시스템 구축',
          ],
          achievements: [
            '배차 중복 수락에 따른 Race Condition 문제를 분산 락 도입으로 완벽히 해결',
            '위치 기반 알림 최적화를 통해 불필요한 알림 발송을 줄이고 기사 배차 수락률 향상',
            '운영 업무 스케줄러 자동화로 기존 수작업 공수의 70% 이상 절감',
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
            'JWT 기반 통합 인증(SSO) 시스템 구축을 통한 서비스 간 사용자 인증 일관성 확보',
            '레거시 PHP 모놀리식 시스템의 점진적 교체를 위한 FastAPI 기반 마이크로서비스 전환 주도',
            '대규모 운영 데이터의 안전한 이전을 위한 Lazy Migration(지연 마이그레이션) 전략 설계',
          ],
          achievements: [
            '분리되어 있던 회원 체계 통합으로 인증 보안 강화 및 사용자 경험 개선',
            'Lazy Migration 도입으로 서비스 다운타임 없이 대규모 계정 정보 무중단 이전 달성',
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
            '초기 인플루언서 관리 및 체험단 중개 플랫폼 백엔드 시스템 단독 설계 및 구축',
            '사용자 증가에 따른 API 성능 모니터링 및 쿼리 최적화 등 서버 튜닝 전반 담당',
            '자동화된 크롤링을 활용한 인플루언서 활동 지수 산출 모듈 개발',
          ],
          achievements: [
            '백엔드 단독 개발로 MVP 출시 후 가입자 3,000명 규모까지 안정적 서비스 운영',
            '쿼리 최적화 및 캐싱 적용을 통해 트래픽 급증 시에도 안정적인 응답 속도 유지',
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
            'Python 기반 AI CAPTCHA 해석 파이프라인을 설계하여 부동산 전월세 신고 자동화 시스템 구축',
            '이미지 전처리·모델 추론·결과 검증 단계를 분리한 안정적인 자동 신고 플로우 구현',
            '반복적인 수작업 신고 프로세스를 자동화하여 운영 효율성 향상',
          ],
          achievements: [
            '수작업 중심의 전월세 신고 프로세스를 자동화하여 처리 시간 대폭 단축',
            'CAPTCHA 실패·오탐에 대비한 재시도 및 검증 로직으로 안정적인 운영 환경 확보',
          ],
          skillKeywords: ['Python', 'OCR', 'TensorFlow'],
        },
        
        {
          title: '가상화폐 선물 거래소',
          startedAt: '2024-01',
          endedAt: '2024-12',
          descriptions: [
            'PHP Laravel 기반 가상화폐 선물 거래소 백엔드 시스템 설계 및 구현',
            '주문·체결·포지션 관리 등 거래 핵심 도메인 로직 개발',
            '거래 안정성을 고려한 주문 상태 관리 및 예외 처리 로직 구현',
          ],
          achievements: [
            '주문·체결 로직 분리를 통해 거래 처리 안정성 및 유지보수성 확보',
          ],
          skillKeywords: ['PHP', 'Laravel', 'MySQL', 'Next.js', 'Redis', 'WebSocket'],
        },
        {
          title: 'Polygon 네트워크 DeFi Farm / 프론트엔드·블록체인 개발자',
          startedAt: '2023-01',
          endedAt: '2023-02',
          descriptions: [
            'Next.js 및 Solidity를 활용한 Polygon 네트워크 기반 DeFi Farm 서비스 구축',
            '스테이킹 및 보상 분배 스마트 컨트랙트 설계·구현',
            '프론트엔드와 스마트 컨트랙트 간 트랜잭션 연동',
          ],
          achievements: [
            '스마트 컨트랙트 기반 자산 관리 로직 구현 경험 확보',
          ],
          skillKeywords: ['Next.js', 'Solidity', 'Polygon', 'Web3'],
        },
        {
          title: '마케팅 자동화 도구',
          startedAt: '2018-02',
          endedAt: '2019-06',
          descriptions: [
            'C# 기반 네이버 밴드 자동 글쓰기 프로그램 개발로 반복 게시 작업 자동화',
            'C# 기반 페이스북 자동 글쓰기 매크로 개발',
            'C# 기반 카카오톡 자동 메시지 발송 프로그램 개발',
          ],
          achievements: [
            '반복적인 마케팅 업무 자동화로 운영 공수 대폭 절감',
          ],
          skillKeywords: ['C#', '.NET', 'Selenium'],
        },
        {
          title: '온라인 강의 플랫폼',
          startedAt: '2017-08',
          endedAt: '2017-12',
          descriptions: [
            'GNUBoard 기반 온라인 강의 플랫폼 구축 및 커스터마이징',
            '영상 스트리밍 서비스 및 결제 모듈 연동 기능 개발',
          ],
          achievements: [
            '강의 등록·결제·수강 흐름을 일관된 구조로 정리하여 운영 편의성 향상',
          ],
          skillKeywords: ['PHP', 'GNUBoard', 'PG'],
        },
        {
          title: '신차 장기렌트카 견적 비교 플랫폼',
          startedAt: '2017-01',
          endedAt: '2017-06',
          descriptions: [
            'React 기반 장기렌트카 견적 비교 웹 서비스 백엔드 및 견적 산출 로직 설계·구현',
            '다수 렌트사 조건을 비교·정규화하는 견적 계산 알고리즘 개발',
            '외부 데이터 연동을 고려한 확장 가능한 API 구조 설계',
          ],
          achievements: [
            '복잡한 견적 조건을 일관된 구조로 표준화하여 신규 렌트사 연동 비용 감소',
          ],
          skillKeywords: ['React', 'Node.js', 'TypeScript'],
        },
      ],
    },
  ],
};

export default experience;
