import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '운영 중 발생하는 실제 문제를 해결하며 성장해온 백엔드 개발자입니다.',
    'Google Maps API 비용 90% 절감, 동시성 문제로 인한 중복 배차 해결, 레거시 시스템 무중단 마이그레이션 등 비즈니스 임팩트가 있는 문제들을 해결해왔습니다.',
    'Python/FastAPI와 Spring Boot를 활용한 API 개발, Redis 캐싱 전략, PostgreSQL 파티셔닝 등을 통해 성능과 비용의 균형점을 찾아 시스템을 최적화합니다.',
    '기술적 완벽함보다는 상황에 맞는 트레이드오프를 통해 실용적인 해결책을 제시하는 개발자입니다.',
  ],
  sign: 'Jun',
  // sign: packageJson.author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
