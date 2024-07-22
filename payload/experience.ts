import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      id: 0,
      title: '가나다콜',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2024-02',
      endedAt: '2024-07',
      descriptions: [
        'Steering Kernel patching and updates for various distributions',
        'Automating deployment and integration processes for Linux servers',
        'Spearheading initiatives to enhance Linux kernel security',
        'Collaborating with global developers to coordinate code contributions',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Dart', 'Flutter', 'MySQL', 'Redis', 'FCM'],
    },
    {
      id: 1,
      title: '유토빌',
      position: 'Python Backend Developr',
      startedAt: '2022-09',
      endedAt: '2024-02',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['Python', 'FastAPI', 'Django', 'PHP', 'MySQL', 'Jenkins'],
    },
    {
      id: 2,
      title: '콘디',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2022-01',
      endedAt: '2022-06',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['Python', 'Django', 'React', 'Nextjs', 'MySQL', 'Jenkins', 'Chartjs'],
    },
    {
      id: 3,
      title: '뉴소프트',
      position: 'Founder & Full-Stack Developer',
      startedAt: '2016-10',
      endedAt: '2021-12',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['C#', 'PHP', 'Python', 'JavaScript', 'MySQL'],
    },
  ],
};

export default experience;
