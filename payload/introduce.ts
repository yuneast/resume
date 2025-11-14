import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '실시간 트래픽 처리, 동시성 제어, 레거시 구조 개선을 중심으로 운영 안정성을 높여온 백엔드 개발자입니다.',
    '오버엔지니어링을 지양하고, 실제 트래픽과 문제 상황에 맞는 실용적인 해결책을 선택합니다.',
    'Google Maps API 비용 90% 절감, 동시성 문제로 발생하던 중복 주문 제거, 레거시 시스템 무중단 마이그레이션 등 서비스 운영 품질에 직접적인 임팩트를 만든 경험이 있습니다.',
    'FastAPI와 Spring Boot 기반 API 개발, Redis 캐싱·락 전략, PostgreSQL 파티셔닝을 통해 현실적인 성능과 운영 효율을 고려한 최적화를 수행합니다.',
  ],
  
  sign: 'Jun',
  // sign: packageJson.author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
