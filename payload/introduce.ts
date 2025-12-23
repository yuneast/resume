import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '{총경력} 경력의 백엔드 엔지니어로,',
    '운영 중인 서비스에서 레거시 시스템의 무중단 마이그레이션,',
    'Redis 기반 동시성 제어, 수백만 건 규모 데이터의',
    '조회 성능 개선과 운영 안정성 확보를 주도해왔습니다.',
  ],

  sign: 'Jun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
