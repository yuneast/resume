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
            'PHP 모놀리식 구조의 확장성 한계를 극복하기 위해 Strangler 패턴을 적용, 트래픽 집중 API부터 Spring Boot로 점진적 이전을 진행하여 운영 리스크를 줄이고 개발 효율성을 높임',
            '배포 후 발생 가능한 리그레션을 방지하기 위해 PHPUnit 기반 사후 테스트 체계 구축, 목데이터와 스모크 테스트를 자동화하여 배포 안정성을 확보',
            'PHP Fatal Error 발생 시 수동 대응의 한계를 개선하기 위해 CloudWatch 로그 패턴을 분석, GitHub Actions와 Claude Code를 연동해 자동 PR 생성 파이프라인을 구축하여 장애 대응 시간을 단축',
          ],
          skillKeywords: [
            'Spring Boot',
            'Kotlin',
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
            '개발 프로세스를 표준화하여 코드 리뷰와 Git-flow 전략을 도입, 배포 사고를 줄이고 팀 전체의 협업 안정성을 강화',
            'GPT API 호출 시 지연 발생 문제를 비동기 요청과 캐싱 레이어로 보완, 다중 사용자 요청 상황에서도 안정적 응답 속도 유지',
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
            '핫딜 오탐률 문제를 해결하기 위해 가격 변동 패턴 기반 동적 임계값 알고리즘을 도입, 실시간성보다 검증 정확도를 우선하여 품질을 개선',
            '쿠팡 대형 프로모션 기간 큐 적체로 인한 지연을 해소하기 위해 Celery 워커를 큐 길이 기반 오토스케일링으로 변경, 급격한 트래픽 변화에도 안정적 처리율을 확보',
            'PostgreSQL 풀스캔으로 인한 성능 저하를 월별 파티셔닝과 복합 인덱스로 최적화, 스토리지 비용 증가를 감수하고 조회 응답 속도를 크게 개선',
            '실시간 알림을 잦은 폴링 방식에서 SSE(Server-Sent Events) 기반 푸시로 전환, 연결 유지 비용보다 반복 요청 부하가 크다고 판단해 서버 리소스를 효율화',
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
            '동일 콜에 여러 기사가 동시 수락하는 문제를 Redis 분산 락으로 해결, 약간의 응답 지연을 감수하고 데이터 정합성을 보장',
            '거리 계산 부하로 인한 타임아웃 문제를 지역 단위 캐싱 전략으로 개선, 100% 최적 배차 대신 준최적 해법으로 응답 속도를 크게 향상',
            '푸시 알림 지연을 해결하기 위해 Celery 기반 비동기 큐를 도입, API 응답과 푸시 처리를 분리해 실시간성을 확보하고 기사 이탈률을 감소',
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
            'PHP 레거시의 복잡도를 줄이기 위해 FastAPI로 단계적 전환을 진행, 트래픽 상위 API부터 이전하며 무중단 환경에서 신규 서비스 안정화',
            '마이그레이션 중 발생했던 운영 사고를 계기로 DB 권한을 환경별로 분리하고 --dry-run을 필수화, 배포 안정성을 높여 장애 재발을 방지',
            '온프레미스 증설 지연 문제를 해결하기 위해 클라우드 환경으로 전환, 비용 증가를 감수하고도 탄력적 확장성을 확보해 트래픽 급증에도 대응 가능',
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
            "자리톡 전월세 신고 시스템 자동화",
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
