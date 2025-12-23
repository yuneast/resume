import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: true,
  list: [
    {
      title: '암호화폐 거래소 백엔드 시스템',
      startedAt: '2022-01',
      endedAt: '2022-06',
      where: '뉴소프트',
      descriptions: [
        {
          content:
            'WebSocket 게이트웨이와 Redis Pub/Sub로 시세·체결 이벤트를 브로드캐스트, 폴링 제거로 실시간 처리 부하 분산',
        },
        {
          content:
            '주문/포지션 API에 idempotency 키와 비동기 확인 큐 적용, 재시도에도 중복 체결 방지',
        },
        { content: '잔고·포지션 갱신을 Redis Lua 스크립트로 원자화, 동시 업데이트 경합 감소' },
        {
          content: '거래/청산 로그를 파티션 테이블로 분리해 장기 로그 보존 비용과 조회 부하 최적화',
        },
      ],
    },
    {
      title: '온라인 강의 플랫폼 구축',
      startedAt: '2021-09',
      endedAt: '2021-11',
      where: '뉴소프트',
      descriptions: [
        { content: '강의/수강/진도 스키마 정규화 및 인덱싱, 강의 목록·진도 집계 쿼리 병목 제거' },
        {
          content: '강의 썸네일·VOD 서빙에 캐시 레이어 도입, CDN 캐시 무효화 훅으로 원본 부하 감소',
        },
        { content: '업로드 파이프라인에 대용량 처리용 비동기 워커 구성, 트랜스코딩 큐 적체 방지' },
      ],
    },
    {
      title: '신차 장기렌트카 견적 플랫폼 구축',
      startedAt: '2021-02',
      endedAt: '2021-04',
      where: '뉴소프트',
      descriptions: [
        {
          content:
            '신규 차종/옵션/프로모션을 규칙 엔진으로 모델링, 계산 경로를 캐시해 반복 견적 부하 흡수',
        },
        {
          content:
            '외부 견적/재고 API 호출을 비동기화하고 서킷브레이커·버스트 제한으로 스파이크 트래픽 보호',
        },
        { content: '야간 배치로 가격/프로모션 스냅샷 갱신, 온라인 트래픽과 오프라인 동기화 분리' },
      ],
    },
  ],
};

export default project;
