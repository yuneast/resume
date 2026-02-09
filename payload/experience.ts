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
          startedAt: '2026-02',
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
          startedAt: '2024-08',
          endedAt: '2025-12',
          descriptions: [
            '학원 운영관리 서비스 (사용자 1만 명), 팀 7명 중 백엔드 담당',
            '시니어 개발자와 협업, 코드 리뷰 및 아키텍처 설계 피드백 적극 수렴',
            '수도코드 작성, 데일리 미팅에서 개발 계획 발표',
            '운영 중 빈번한 SQL 에러 알림 (네이버웍스), 이스케이프 문자 처리 문제 확인',
            'Prepared Statement 전환 제안 및 적용, SQL 에러 완전 해결',
            'PHP 레거시 코드 리팩토링, Service-Repository 패턴 도입',
            '인증 서버 분리, 3개 서비스 통합 회원 시스템 구현',
            '운영 중 크론 서버 장애 다발, 자동 감지 시스템 제안',
            '로그 분석 수작업 개선 필요, LLM 활용 자동 분석 및 PR 생성 툴 제작',
          ],
          achievements: [
            '쿼리 최적화로 슬로우 쿼리 0건 수준 유지',
            // 측정: MySQL 슬로우 쿼리 로그 분석 (1초 이상 쿼리 0건, 3개월간 모니터링)
            'Prepared Statement 전환으로 이스케이프 문제로 인한 SQL 에러 완전 해결',
            // 측정: 이스케이프 문제로 인한 SQL 에러 0건 (로그 분석, 3개월간 모니터링)
            '장애 감지 자동화로 대응 시간 50% 단축',
            // 측정: 수동 확인 평균 2시간 → 자동 감지 후 1시간 이내 대응
            'LLM 기반 자동화로 로그 분석 공수 83% 절감',
            // 측정: 로그 분석 수작업 평균 1시간 → 자동 분석 10분
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
      title: '가나다콜',
      positions: [
        {
          title: '고소작업차 실시간 배차 서비스 / 백엔드 개발자',
          startedAt: '2023-03',
          endedAt: '2024-07',
          descriptions: [
            '실시간 배차 서비스 (기사 2,000명), 백엔드 단독 담당',
            '플러터 개발자와 API 스펙 협의, 배차 시스템 아키텍처 설계',
            '배차 매칭 엔진, 주문·배차·정산 도메인 로직 구현',
            '20-30명 동시 수주로 중복 수락 발생, Redis 분산 락으로 동시성 제어',
            '기사 피드백 반영, 위치 기반 알림 개선 및 FCM 푸시 최적화',
            '배차 조회 API 응답 지연 분석, 쿼리 최적화와 Redis 캐싱으로 개선',
          ],
          achievements: [
            '분산 락 도입으로 배차 중복 수락 Race Condition 완전 해결',
            // 측정: 분산 락 적용 후 중복 수락 에러 0건 (로그 분석, 3개월간 모니터링)
            '위치 기반 알림 최적화로 불필요한 알림 60% 감소',
            // 측정: 알림 발송 건수 일 1,500건 → 600건, 배차 수락률 40% → 50% 개선 (데이터 분석)
            '배차 조회 API 응답 시간 2.5초 → 0.4초 개선',
            // 측정: CloudWatch 메트릭 P95 응답 시간 비교 (쿼리 최적화, 캐싱 적용 전후)
          ],
          skillKeywords: ['Java', 'Spring Boot', 'JPA', 'QueryDSL', 'MySQL', 'Redis', 'FCM', 'AWS CloudWatch', '네이버웍스'],
        },
      ],
    },
    {
      title: '(주)유토빌',
      positions: [
        {
          title: '공동주택 관리 서비스 / 백엔드 리드 개발자',
          startedAt: '2021-09',
          endedAt: '2023-02',
          descriptions: [
            '공동주택 관리 서비스 (20개 단지), 개발팀 3명 리드',
            '팀 기술 스택 선정 (Python/FastAPI), 백엔드 아키텍처 설계 주도',
            '관리비 대납, 주차 관리, 투표 기능 API 개발',
            'PR 기반 코드 리뷰 프로세스 도입, 주니어 개발자 2명 멘토링',
            '홈케어 이커머스 추가로 세션 기반 인증 한계 발생',
            '다중 서비스 통합 인증 필요성 분석, 쿠키 기반 인증으로 무중단 전환',
            'GitHub Actions CI/CD 파이프라인 구축, 배포 자동화',
          ],
          achievements: [
            '무중단 인증 전환, 2개 서비스 통합 인증 완성',
            // 측정: Blue-Green 배포로 다운타임 0초, 기존 사용자 로그인 유지
            'CI/CD 도입으로 배포 주기 단축, 배포 안정성 확보',
            // 측정: 수동 배포 주 1회 → 자동 배포 일 평균 3회, 배포 실패율 0% 유지
            '코드 리뷰 정착, 주니어 개발자 2명 독립 개발 가능 수준으로 성장',
            // 측정: 전체 PR 코드 리뷰 100% 수행, 주니어 개발자 기능 개발 단독 완수
          ],
          skillKeywords: ['Python', 'PHP', 'FastAPI', 'MySQL', 'Docker', 'GitHub Actions', 'CI/CD'],
        },
      ],
    },
    {
      title: '콘디',
      positions: [
        {
          title: '인플루언서 중개 플랫폼 / 창업자 (풀스택 개발)',
          startedAt: '2020-06',
          endedAt: '2021-08',
          descriptions: [
            '인플루언서-광고주 매칭 플랫폼 0부터 기획, 서비스 설계 및 단독 개발',
            'Django 풀스택 개발, 블로거 지수 산출 알고리즘 설계 및 구현',
            '사용자 증가로 블로거 지수 API 응답 지연 발생 (5초 이상)',
            '크롤링 작업 분석 결과 동기 처리가 원인, Celery 비동기 큐로 전환',
            '자주 조회되는 블로거 데이터 Redis 캐싱, 응답 시간 0.5초 이하로 개선',
            '광고주·인플루언서 피드백 적극 수렴, 기능 개선 및 UI/UX 업데이트',
          ],
          achievements: [
            '0부터 MVP 개발 및 출시, 가입자 3,000명 규모 서비스 운영',
            // 측정: 런칭 후 14개월간 가입자 3,000명 달성, MAU 800명 수준 유지
            '비동기 처리와 캐싱으로 API 응답 시간 5초 → 0.5초 개선',
            // 측정: 블로거 지수 API 응답 시간 before/after 비교 (로그 분석)
          ],
          skillKeywords: ['Python', 'Django', 'Django Template', 'MySQL', 'Celery', 'Redis', 'Crawling'],
        },
      ],
    },
    {
      title: '뉴소프트',
      positions: [
        {
          title: '프리랜서 풀스택 개발',
          startedAt: '2017-01',
          endedAt: '2020-05',
          descriptions: [
            'Python 기반 부동산 전월세 신고 자동화 서비스 개발',
            'PHP Laravel 기반 가상화폐 선물 거래소 백엔드 개발',
            'Solidity 기반 Polygon 네트워크 DeFi Farm 스마트 컨트랙트 구현',
            'C# 기반 마케팅 자동화 도구 개발',
            'React, Node.js 기반 장기렌트카 견적 비교 플랫폼 개발',
          ],
          skillKeywords: ['PHP', 'Laravel', 'Python', 'C#', 'React', 'Node.js', 'Solidity', 'MySQL', 'Redis'],
        },
      ],
    },
  ],
};

export default experience;
