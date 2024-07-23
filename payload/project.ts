import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      id: 0,
      title: '가나다콜 신규 서비스 개발',
      startedAt: '2024-02',
      endedAt: '2024-07',
      where: '가나다콜',
      descriptions: [
        {
          content: '안정적인 백엔드 시스템 구축',
        },
        {
          content: '모바일 애플리케이션 개발',
        },
        {
          content: '실시간 알림 기능 구현',
        },
        {
          content: '시스템 최적화 및 성능 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Redis를 이용하여 첫 번째로 콜을 잡은 사람이 DB에 처리되기 전에 해당 수주를 Redis에 수주 완료 처리를 하고 이후 요청은 전부 무시하는 방법으로 구현' },
          ],
        },
      ],
    },

    {
      id: 1,
      title: '홈케어 서비스(이커머스) 신규 서비스 개발',
      startedAt: '2023-04',
      endedAt: '2023-12',
      where: '유토빌',
      descriptions: [
        {
          content: 'Python FastAPI를 사용한 백엔드 API 개발',
        },
        {
          content: '입주민과 작업자를 연결하는 아웃소싱 서비스 기능 구현 (벌레 잡기, 빨래, 쓰레기 버리기, 에어컨 청소 등)',
        },
        {
          content: '이커머스 플랫폼의 주문 처리 및 관리 시스템 개발',
        },
        {
          content: '기존 유토빌과 회원 통합하여 가입 절차 간소화',
        },
        {
          content: '관리자 페이지 개발',
        },
        {
          content: '이커머스 플랫폼의 주문 처리 및 관리 시스템 개발',
        },
        {
          content: '관리자 페이지에서 수익 통계 처리 최적화 작업 수행',
        },
      ],
    },

    {
      id: 2,
      title: '데이터베이스 최적화',
      startedAt: '2023-02',
      endedAt: '2023-03',
      where: '유토빌',
      descriptions: [
        {
          content: '서비스 무중단으로 쿼리 최적화 및 인덱스 추가',
        },
        {
          content: '데이터베이스 구조 개선',
        },
      ],
    },

    {
      id: 3,
      title: '레거시 코드 청산 및 기존코드 Python FastAPI로 리팩토링',
      startedAt: '2022-10',
      endedAt: '2023-02',
      where: '유토빌',
      descriptions: [
        {
          content: '기존 PHP 코드 분석 및 리팩토링 계획 수립',
        },
        {
          content: 'Python FastAPI로 프로젝트 전환 작업 수행',
        },
      ],
    },

    {
      id: 3,
      title: '부동산 전월세 자동신고 매크로',
      startedAt: '2022-06',
      endedAt: '2022-09',
      where: '뉴소프트',
      descriptions: [
        {
          content: '구글 스프레드시트 API를 활용하여 필요한 데이터를 신속하게 추출하고, 이를 사용하여 표준화된 형식의 위임장을 자동으로 생성하는 시스템 개발',
        },
        {
          content: '안전한 전자 서명 프로세스를 문서에 통합하여, 법적 요구 사항을 충족시키는 동시에 문서 인증 및 전송 과정 자동화',
        },
        {
          content: '딥러닝을 이용한 CAPTCHA 인식',
        },
        {
          content: '문서 자동 전송 시스템 개발',
        },
      ],
    },

    {
      id: 4,
      title: '콘디 신규 서비스 개발',
      startedAt: '2022-01',
      endedAt: '2022-06',
      where: '콘디',
      descriptions: [
        {
          content: '인플루언서 체험단 사이트 전체 개발 및 런칭',
        },
        {
          content: '체험단 등급을 매기는 알고리즘 개발',
          weight: 'MEDIUM',
          descriptions: [
            { 
              content: '체험단의 활동 및 성과를 기반으로 등급을 산정하는 알고리즘 설계 및 구현' 
            },
          ],
        },
        {
          content: '판매 통계 대시보드 개발',
          weight: 'MEDIUM',
          descriptions: [
            { 
              content: 'Chart.js를 사용하여 시각적으로 보기 쉽게 통계 대시보드 구현' 
            },
          ],
        },
      ],
    },

    

    {
      id: 5,
      title: '폴리곤 네트워크 디파이팜 개발',
      startedAt: '2021-01',
      endedAt: '2021-06',
      where: '뉴소프트',
      descriptions: [
        {
          content: 'Solidity를 사용한 스마트 컨트랙트 개발',
        },
        {
          content: '디파이팜 프론트엔드 개발',
        },
        {
          content: 'Web3.js를 사용한 블록체인과의 상호작용 구현',
        },
      ],
    },


    {
      id: 6,
      title: '네이버 밴드 글쓰기 프로그램 개발',
      startedAt: '2020-01',
      endedAt: '2020-06',
      where: '뉴소프트',
      descriptions: [
        {
          content: 'C# 및 Selenium 을 사용하여 네이버 밴드 내 자동화된 글쓰기 기능 구현',
        },
        {
          content: '쓰레드를 사용하여 매크로의 성능 최적화',
        },
      ],
    },
  ],
};

export default project;
