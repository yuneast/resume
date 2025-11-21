import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    // 1. 정체성: 레거시 청산 & 안정성
    '비효율적인 레거시 시스템을 걷어내고, 유지보수하기 좋은 구조로 개선하는 과정을 즐기는 백엔드 개발자입니다.',
    
    // 2. 일하는 방식: 데이터 기반 의사결정 (추측 X -> 근거 O)
    '막연한 추측보다는 로그와 모니터링 데이터를 기반으로 병목 구간을 찾습니다. 비즈니스 상황에 맞춰 오버엔지니어링을 지양하고, 현실적이고 효율적인 해결책을 찾으려 노력합니다.',
    
    // 3. 핵심 역량: 마이그레이션, DB 최적화, 동시성
    'PHP 모놀리식 구조를 Spring/FastAPI로 전환한 경험이 있으며, Redis 분산 락을 통한 동시성 제어와 복합 인덱스 설계를 통해 데이터 정합성과 조회 성능을 동시에 챙깁니다.',
    
    // 4. 최신 기술 응용: LLM 자동화 강조 (차별점)
    '반복되는 운영 업무를 줄이기 위해 LLM 기반의 에러 핸들링 파이프라인을 구축하는 등, 개발 생산성을 높이는 자동화 기술에도 관심이 많습니다.',
  ],
  
  sign: 'Jun',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;