import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      id: 0,
      title: '고졸검정고시',
      subTitle: '합격',
      startedAt: '2024-04',
      endedAt: '2024-05',
    },
    {
      id: 1,
      title: '브렌트 인터네셔널 스쿨 수빅',
      subTitle: '중퇴',
      startedAt: '2015-06',
      endedAt: '2016-06',
    },
    {
      id: 2,
      title: '세광고등학교',
      subTitle: '중퇴',
      startedAt: '2014-03',
      endedAt: '2015-06',
    },
  ],
};

export default education;
