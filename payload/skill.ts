import { ISkill } from '../component/skill/ISkill';

// 기술 스택을 명확하게 분류하고, 각 카테고리의 주요 기술만 포함하도록 정리했습니다.
const programmingLanguages: ISkill.Skill = {
  id: 0,
  category: 'Programming Languages',
  items: [
    { id: 1, title: 'Python' },
    { id: 2, title: 'TypeScript' },
    { id: 3, title: 'JavaScript' },
    { id: 4, title: 'Dart' },
    { id: 5, title: 'PHP' },
    { id: 6, title: 'C#' },
  ],
};

const frameworks: ISkill.Skill = {
  id: 1,
  category: 'Frameworks & Libraries',
  items: [
    { id: 1, title: 'FastAPI' },
    { id: 2, title: 'Django' },
    { id: 3, title: 'Next.js' },
    { id: 4, title: 'React' },
    { id: 5, title: 'Flutter' },
    { id: 6, title: 'Laravel' },
  ],
};

const databasesCaching: ISkill.Skill = {
  id: 2,
  category: 'Databases & Caching',
  items: [
    { id: 1, title: 'PostgreSQL' },
    { id: 2, title: 'MySQL' },
    { id: 3, title: 'Redis' },
    { id: 4, title: 'MongoDB' },
  ],
};

const devOpsCloud: ISkill.Skill = {
  id: 3,
  category: 'DevOps & Cloud',
  items: [
    { id: 1, title: 'Docker' },
    { id: 2, title: 'Kubernetes' },
    { id: 3, title: 'AWS' },
    { id: 4, title: 'Nginx' },
    { id: 5, title: 'Jenkins' },
  ],
};

const toolsIDE: ISkill.Skill = {
  id: 4,
  category: 'Tools & IDEs',
  items: [
    { id: 1, title: 'Git & GitHub' },
    { id: 2, title: 'VS Code' },
    { id: 3, title: 'Vim' },
    { id: 4, title: 'Postman' },
  ],
};

const misc: ISkill.Skill = {
  id: 5,
  category: 'Miscellaneous',
  items: [
    { id: 1, title: 'Linux Shell' },
    { id: 2, title: 'RESTful API Design' },
    { id: 3, title: 'GraphQL' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    frameworks,
    databasesCaching,
    devOpsCloud,
    toolsIDE,
    misc,
  ],
};

export default skill;
