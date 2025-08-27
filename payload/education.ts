import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '학점은행제',
      subTitle: '컴퓨터공학 전공, 재학중',
      startedAt: '2025-04',
      // endedAt: '2010-02',
    },
    {
      title: '브렌트 인터내셔널 스쿨 수빅',
      subTitle: '졸업',
      startedAt: '2015-06',
      endedAt: '2016-06',
    },
    {
      title: '세광고등학교',
      subTitle: '중퇴',
      startedAt: '2014-03',
      endedAt: '2015-06',
    },
  ],
};

export default education;
