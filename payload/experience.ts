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
            'PHP 모놀리식 구조를 개선하기 위해 Strangler 패턴을 도입, 주요 API를 Spring Boot로 분리하여 코드 복잡도를 낮춤',
            '배포 후 장애를 줄이기 위해 PHPUnit과 Mock 객체를 활용한 테스트 환경을 구축하고 테스트 커버리지 관리',
            '장애 발생 시 LLM이 로그를 분석해 수정 코드를 포함한 PR을 자동으로 생성하도록 자동화하여, 원인 파악 시간을 단축',
          ],
          skillKeywords: [
            'PHP', 'Kotlin', 'Python', 'Spring Boot', 'FastAPI', 'JPA', 'MySQL', 'Redis', 'Docker', 'GitHub Actions', 'AWS CloudWatch',
          ],
        },
      ],
    },
    {
      title: '딜잇',
      positions: [
        {
          title: 'Co-Founder & 백엔드 개발자',
          startedAt: '2024-01',
          endedAt: '2025-06',
          descriptions: [
            '900만 건 이상의 가격 데이터 조회 속도가 느려지는 문제를 해결하기 위해, 쿼리 패턴에 맞춰 (상품ID, 날짜) 복합 인덱스 적용',
            '매일 쌓이는 크롤링 데이터 용량을 관리하기 위해, 상품당 하루 한 개의 최저가만 남기는 Upsert 방식으로 DB 부하 감소',
            '단순 가격 변동이 아닌 역대 최저가 대비 하락폭을 계산하는 로직을 추가해, 의미 없는 알림 발송을 줄임',
            '반복적인 폴링(Polling) 요청을 SSE(Server-Sent Events) 실시간 푸시로 전환하여 서버 리소스 낭비 제거',
          ],
          skillKeywords: [
            'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'FCM', 'SSE',
          ],
        },
      ],
    },
    {
      title: '가나다콜',
      positions: [
        {
          title: 'Co-Founder & 백엔드 개발자 ',
          startedAt: '2023-06',
          descriptions: [
            '기사 배차 시 발생하는 중복 수락(Race Condition) 문제를 Redis 분산 락으로 제어해 데이터 꼬임 현상 방지',
            '주문 폭주 시간대에 푸시 알림이 늦게 가는 문제를 해결하기 위해 Celery 워커 설정을 튜닝하여 전송 속도 개선',
          ],
          skillKeywords: [
            'Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Redis', 'Celery', 'FCM',
          ],
        },
      ],
    },
    {
      title: "유토빌",
      positions: [
        {
          title: "백엔드 개발자",
          startedAt: "2022-09",
          endedAt: "2024-02",
          descriptions: [
            "분리되어 있던 ERP와 이커머스 회원 시스템을 JWT 기반 SSO로 통합 구축",
            "로그인 시도 시 레거시 DB(유토빌 1, 2)를 순차 조회하여, 검증된 계정을 신규 통합 DB로 자동 이관하는 Lazy Migration 구현",
            "운영 DB 사고를 막기 위해 계정별 권한을 분리하고, 배포 스크립트에 Dry-run(가실행) 검증 단계 추가",
            "노후된 PHP 시스템을 유지보수가 용이한 FastAPI 기반 API 서버로 재구축하여 개발 효율 개선",
            "온프레미스 서버를 클라우드로 옮기고 오토스케일링을 적용해, 트래픽 변동에 유연하게 대응하도록 인프라 개선",
            "Git-flow 전략과 코드 리뷰를 도입하여 체계적인 협업 프로세스 정착",
          ],
          skillKeywords: [
            'Python', 'PHP', 'FastAPI', 'MySQL', 'Docker',
            'Git', 'GitHub Actions', 'AWS CloudWatch',
          ],
        },
      ],
    },
    {
      title: '콘디',
      positions: [
        {
          title: 'Co-Founder & 백엔드 개발자',
          startedAt: '2021-08',
          endedAt: '2022-08',
          descriptions: [
            '체험단 중개 플랫폼을 기획 및 개발, Django MVT 구조로 빠르게 MVP를 출시하여 초기 유저 3,000명 유치',
            '블로그 데이터 크롤링 시 DB 락이 걸리는 문제를 해결하기 위해 배치 처리 단위와 트랜잭션 범위 조정',
            '필터링 조회 속도가 느린 API에 Eager Loading(select_related)을 적용해 N+1 문제 해결',
            '단일 서버에서 최대한 많은 트래픽을 받기 위해 Gunicorn 워커 설정 튜닝 및 정적 파일 캐싱 적용',
          ],
          skillKeywords: [
            'Python', 'Django', 'Django ORM', 'MySQL', 'Crawling', 'System Optimization',
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
            "부동산 전월세 신고 자동화 시스템 구축",
            "가상화폐 거래소 오더북 엔진 및 매수/매도 체결 로직 구현",
            "온라인 강의 플랫폼 영상 스트리밍 연동 및 결제 기능 개발",
            "신차 장기렌트카 견적 비교 알고리즘 개발",
          ],
          skillKeywords: [
            'Python', 'PHP', 'JavaScript', 'MySQL', 'PostgreSQL',
          ],
        },
      ],
    },
  ],
};

export default experience;