import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '레거시 시스템을 개선하고 운영 가능한 구조로 만드는 데 강점을 가진 백엔드 개발자입니다.',
    '로그·모니터링 기반으로 병목을 분석하며, 비즈니스 상황에 맞는 현실적인 해법을 선호합니다.',
    'Spring/FastAPI 전환, Redis 분산락, 대규모 데이터 인덱스 설계 경험을 보유하고 있습니다.',
  ],
  
  sign: 'Jun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;