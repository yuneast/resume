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
            'PHP → Kotlin(Spring Boot) 전환을 통해 성능 및 유지보수성 개선',
            '배포 환경 오류 실시간 탐지·자동 수정 (CloudWatch + GitHub Actions + Claude Code)',
          ],
          skillKeywords: [
            'PHP',
            'Java',
            'Kotlin',
            'Spring Boot',
            'Spring Security',
            'JPA',
            'MySQL',
            'Redis',
            'Docker',
            'AWS',
          ],
        },
      ],
    },
    {
      title: '딜잇',
      positions: [
        {
          title: "Founder & Full-Stack Developer",
          startedAt: "2024-10",
          endedAt: "2025-06",
          descriptions: [
            "쿠팡 상품 데이터를 실시간으로 크롤링·분석해 핫딜 탐지 알고리즘 적용, 사용자에게 즉시 알림 제공",
            "Celery + Redis 기반 파이프라인으로 하루 500만+ 가격 데이터 안정 수집 및 처리",
            "핫딜 알림이 발생하면 수백 명의 사용자가 동시에 몰려드는 트래픽을 DB 파티셔닝·Redis 캐싱·SSE 구조로 처리하여 안정적인 실시간 서비스 제공",
          ],
          skillKeywords: [
            "Python",
            "FastAPI",
            "Next.js",
            "PostgreSQL",
            "Redis",
            "Celery",
            "FCM",
            "Docker",
            "SSE"
          ]
        }
      ],
    },
    // {
    //   title: '코보티스',
    //   positions: [
    //     {
    //       title: 'Python Backend Developer',
    //       startedAt: '2024-10',
    //       endedAt: '2025-06',
    //       descriptions: [
    //         'Celery 워커 풀로 100TPS+ API 처리 안정화',
    //         'PostGIS 공간 인덱스로 지도 쿼리 응답 50% 개선',
    //         'Google Places API 최적화/캐싱으로 비용 60% 절감',
    //       ],
    //       skillKeywords: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
    //     },
    //   ],
    // },
    {
      title: '가나다콜',
      positions: [
        {
          title: 'Founder & Full-Stack Developer',
          startedAt: '2023-11',
          endedAt: '2024-09',
          descriptions: [
            "고소작업차 수주·발주 중계 플랫폼을 기획부터 개발까지 단독으로 구축",
            "수주 공고가 선착순 경쟁 구조라, 푸시 알림이 발송되면 동시에 수백 명이 몰려드는 요청을 처리하고 ‘가장 먼저 수주한 사용자’를 정확히 선별하는 로직 구현",
            "Redis 기반 분산 락과 원자적 트랜잭션 처리로 공정한 선착순 보장",
            "FCM 메시지 전송을 Celery 기반 비동기 처리로 개선해 알림 전송 지연과 실패율을 크게 감소",
          ],
          skillKeywords: [
            "Python", "FastAPI", "Celery", "Dart", "Flutter",
            "MySQL", "Redis", "FCM"
          ]
        },
      ],
    },
    {
      title: "유토빌",
      positions: [
        {
          title: "Backend Developer",
          startedAt: "2022-09",
          endedAt: "2024-02",
          descriptions: [
            "레거시 PHP 시스템을 FastAPI 기반 API 서버로 전면 리팩토링하여 안정성과 유지보수성 확보",
            "PostgreSQL 파티셔닝 및 인덱스 최적화로 대용량 데이터 처리 성능 향상",
            "GitHub, Docker, Jenkins 기반 CI/CD 파이프라인 구축으로 배포 프로세스 자동화",
            "온프레미스 중심 인프라를 클라우드 환경으로 이전하고 운영 자동화 체계 확립"
          ],
          skillKeywords: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "RQ",
            "Docker",
            "CI/CD",
            "Jenkins",
            "GitHub",
            "Cloud"
          ]
        }
      ]
    }
  ],
};

export default experience;
