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
          title: '백엔드 개발자',
          startedAt: '2025-08',
          descriptions: [
            '운영 중인 PHP 모놀리식의 확장성 한계와 유지보수 어려움으로 신규 기능 추가 시 사이드이펙트 빈발, Strangler 패턴으로 점진적 마이그레이션 진행, 전체 재작성 대신 사용 빈도 높은 모듈부터 Spring Boot로 전환하여 개발 생산성 향상',
            'PHP Fatal Error 발생 시 메신저 알림만 받던 수동 대응의 한계로 장애 복구 지연 문제 겪음, CloudWatch 로그 패턴 분석으로 반복 오류 식별 후 GitHub Actions 및 Claude Code 연동하여 자동 수정 파이프라인 구축, 오류는 자동 PR 생성으로 대응 시간 단축',
          ],
          skillKeywords: [
            'Spring Boot',
            'Kotlin/Java',
            'JPA',
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
          title: '백엔드 개발자',
          startedAt: '2024-10',
          endedAt: '2025-06',
          descriptions: [
            '체계 없던 개발 프로세스를 표준화, 코드 리뷰와 Git-flow 브랜치 전략 도입으로 배포 사고율 감소, 개발 속도보다 안정성 우선 선택으로 팀 생산성 장기적 향상',
            'Google Maps API 호출 비용 월 수백만원 문제 해결, Redis 캐싱 전략으로 반복 요청 차단, 정확도 100% 대신 24시간 캐시 TTL 적용하여 API 비용 90% 절감',
            'GPT API 기반 여행 일정 생성 시 응답 속도보다 정확도 우선, 프롬프트 최적화와 컨텍스트 강화에 집중, 3초 지연을 감수하고 사용자 맞춤형 일정 품질 향상으로 재사용률 증가',
          ],
          skillKeywords: [
            'Python',
            "PHP",
            'FastAPI',
            'Laravel',
            'PostgreSQL',
            'Redis',
            'Celery',
            'Docker',
          ],
        },
      ],
    },
    {
      title: '딜잇',
      positions: [
        {
          title: '백엔드 개발자',
          startedAt: '2024-01',
          descriptions: [
            '핫딜 오탐률 30% 문제를 해결하기 위해 가격 변동 패턴 분석 후 시간대별/카테고리별 임계값 동적 조정 알고리즘 도입, 정확도 향상과 실시간성 사이에서 5분 지연을 허용하여 검증 정확도 우선 전략 선택',
            '빅스마일데이 기간 큐 적체로 8시간 지연 장애 경험 후, Celery 워커를 CPU 사용률 기반에서 큐 길이 기반 오토스케일링으로 변경, 피크 예측이 어려운 상황에서도 안정적 처리량 확보',
            'PostgreSQL 풀스캔으로 인한 응답 지연 문제를 월별 파티셔닝과 복합 인덱스로 해결, 스토리지 비용 증가를 감수하고 조회 성능 우선으로 결정하여 사용자 경험 개선',
            '클라이언트 실시간 알림을 위한 잦은 폴링으로 서버 부하 증가 문제 발생, SSE(Server-Sent Events) 도입으로 푸시 방식 전환, 연결 유지 오버헤드보다 반복 요청 처리 비용이 크다고 판단하여 서버 리소스 효율화',
          ],
          skillKeywords: [
            'Python',
            'FastAPI',
            'PostgreSQL',
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
          title: '백엔드 개발자 ',
          startedAt: '2023-06',
          descriptions: [
            '고소작업차 선착순 배차 시 동일 콜에 3-4명이 동시 수락하는 문제 발생, DB 트랜잭션만으로는 부족하여 Redis 분산 락 도입, 응답 속도 50ms 증가를 감수하고 데이터 정합성 우선 선택',
            '기사 위치 기반 배차 시 거리 계산 부하로 타임아웃 발생, 실시간 계산 대신 지역별 그리드 사전 캐싱 전략 채택, 100% 최적 배차보다 95% 준최적 배차로 응답 속도 개선에 집중',
            'FCM 푸시 알림 10초 지연으로 기사 이탈률 증가, 동기 처리에서 Celery 비동기 큐 분리로 병렬 처리 구현, API 응답과 푸시 알림을 분리하여 사용자 경험과 실시간성 모두 확보',
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
          title: '백엔드 개발자',
          startedAt: '2022-09',
          endedAt: '2024-02',
          descriptions: [
            'PHP 레거시 코드의 복잡도 증가로 신규 기능 개발 리드타임 3배 증가 문제, 전면 재작성보다 트래픽 많은 핵심 API부터 FastAPI로 단계적 전환 결정, 6개월간 기존 PHP와 신규 FastAPI 병행 운영의 복잡도를 감수하고 무중단 전환 달성',
            '마이그레이션 사고 경험 후 DB 환경별 권한 분리와 --dry-run 필수화 프로세스 도입, 개발 속도 희생하더라도 안전장치 강화를 선택하여 운영 사고 제로화 달성',
            '온프레미스 서버 증설 리드타임 2주 문제로 트래픽 급증 대응 실패 경험 후 클라우드 전환, 유휴 리소스 비용 증가 대신 탄력적 확장성 확보를 선택하여 비즈니스 기회 손실 방지',
          ],
          skillKeywords: [
            'Python',
            'PHP',
            'Django',
            'PostgreSQL',
            'Docker',
            'CI/CD',
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
            "자리톡 전월세 자동 신고 시스템 구축",
            "암호화폐 거래소 구축",
            "온라인 강의 플랫폼 구축",
            "신차 장기렌트카 견적 플랫폼 구축",
          ],
          skillKeywords: [
            'Python',
            'PHP',
            "MySQL",
            'PostgreSQL',
          ],
        },
      ],
    },
  ],
};

export default experience;
