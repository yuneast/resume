import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '{총경력} 백엔드 개발자.',
    'API 비용 90% 절감, 운영 공수 70% 절감, 응답속도 75% 개선.',
    '측정 가능한 비즈니스 임팩트를 만들어온 개발자입니다.',
  ],

  sign: 'Jun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
