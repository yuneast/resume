import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 저는 Python 백엔드 개발자 윤동준입니다.',
    '고등학생 시절, 작은 외주 프로젝트를 수행하며 프로그래밍의 작동 원리와 즐거움을 깨닫고 깊이 빠져들게 되었습니다.',
    '현재 FastAPI, SQLAlchemy, PostgreSQL, Redis, Celery 등을 활용해 안정적인 대규모 비동기 처리 시스템을 설계하고 운영하고 있습니다. 또한 Docker 기반 CI/CD 파이프라인과 pytest를 통한 테스트 자동화로 개발 효율성과 품질을 동시에 높이고 있습니다.',
    '과거에는 스타트업 창업 경험을 통해 서비스 기획부터 배포까지 전체 개발 사이클을 직접 주도했으며, 로컬라이제이션 시스템 설계와 다국어 콘텐츠 자동 생성 기능을 구현하여 글로벌 사용자 경험을 개선했습니다.',
    '앞으로는 분산 시스템과 트래픽 최적화, 새로운 알고리즘 연구에 집중하며, 오픈소스 기여와 커뮤니티 활동을 통해 더 많은 개발자와 지식을 나누고 싶습니다.',
  ],
  sign: 'Jun',
  // sign: packageJson.author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
