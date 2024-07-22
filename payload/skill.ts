import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  id: 0,
  category: 'Programming Languages',
  items: [
    {
      id: 0,
      title: 'Python',
    },
    {
      id: 1,
      title: 'PHP',
    },

    {
      id: 2,
      title: 'C#',
    },

    {
      id: 3,
      title: 'TypeScript',
    },

    {
      id: 4,
      title: 'JavaScript',
    },

    {
      id: 5,
      title: 'Go',
    },

    {
      id: 6,
      title: 'Dart',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  id: 1,
  category: 'Kernel Development',
  items: [
    {
      id: 0,
      title: 'FastAPI',
    },
    {
      id: 1,
      title: 'Django',
    },
    {
      id: 2,
      title: 'Node.js',
    },
    {
      id: 3,
      title: 'Nextjs',
    },
    {
      id: 4,
      title: 'React',
    },
    {
      id: 5,
      title: 'Flutter',
    },
    {
      id: 6,
      title: 'Laravel',
    },
    {
      id: 7,
      title: 'Golang',
    },
  ],
};

const virtualization: ISkill.Skill = {
  id: 2,
  category: 'Virtualization',
  items: [
    {
      id: 0,
      title: 'AWS',
    },
    {
      id: 1,
      title: 'Docker',
    },
    {
      id: 2,
      title: 'MySQL',
    },
    {
      id: 3,
      title: 'Nginx',
    },
    {
      id: 4,
      title: 'Apache',
    },
    {
      id: 5,
      title: 'Redis',
    },
    {
      id: 6,
      title: 'Kafka',
    },
    {
      id: 7,
      title: 'FCM',
    },
  ],
};

const automation: ISkill.Skill = {
  id: 3,
  category: 'Automation',
  items: [
    {
      id: 0,
      title: 'Vim',
    },
    {
      id: 1,
      title: 'VS Code',
    },
    {
      id: 2,
      title: 'Visual Studio',
    },
    {
      id: 3,
      title: 'Jenkins',
    },
    {
      id: 4,
      title: 'Git',
    },
    {
      id: 5,
      title: 'Github',
    },
  ],
};

const misc: ISkill.Skill = {
  id: 4,
  category: 'Misc',
  items: [
    {
      id: 0,
      title: 'Piano',
    },
    {
      id: 1,
      title: 'Travel',
    },
    {
      id: 2,
      title: 'Badminton',
    },
    {
      id: 3,
      title: 'Guitar',
    },
    {
      id: 4,
      title: 'Fishing',
    },
    {
      id: 5,
      title: 'Golf',
    },
    {
      id: 6,
      title: 'Netflix',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, virtualization, automation, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
