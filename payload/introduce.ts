import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '{총경력} 백엔드 개발자.',
    '문제를 발견하고, 분석하고, 해결합니다.',
    'API 응답 84%, 운영 공수 70%, 장애 대응 60% 개선.',
  ],

  sign: 'Jun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
