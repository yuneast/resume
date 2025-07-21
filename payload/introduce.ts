import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Python 기반의 비동기 시스템 설계에 특화된 백엔드 개발자입니다.',
    'FastAPI, Redis, Celery 등으로 안정적인 100TPS 처리 시스템을 구축해왔으며,',
    'CI/CD 자동화, 대규모 데이터 처리, 다국어 로컬라이제이션 등 다양한 문제를 해결해본 경험이 있습니다.',
    '기술을 넘어 사용자와 비즈니스 가치를 함께 생각하는 개발자가 되고자 합니다.',
  ],
  sign: 'Jun',
  // sign: packageJson.author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
