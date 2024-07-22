import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요! 저는 윤동준입니다. 새로운 도전에 대한 열정을 가지고 있으며, 고등학생 때 부모님께 받은 용돈이 부족해 시작된 프로그래밍에 대한 관심이 지금의 저를 이끌었습니다. 처음에는 용돈을 벌기 위해 외주 작업을 시작했지만, 이를 통해 프로그래밍 언어의 작동 원리와 구조를 깊이 이해하게 되었습니다.',
    '오늘날, 저는 스타트업 창업을 경험하고 다양한 기업에서 일할 수 있을 만큼 성장하였습니다. 현재 주요 관심사는 다양한 클라이언트를 만나 그들이 만족할 수 있는 서비스를 구축하는 것입니다.',
    '또한, 저는 대규모 트래픽 처리 및 분산 시스템에 대해 공부하고 있으며, 이를 바탕으로 새로운 알고리즘을 개발하고자 합니다.',
  ],
  sign: 'Jun',
  // sign: packageJson.author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
