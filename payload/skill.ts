import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  id: 0,
  category: 'Backend',
  items: [
    { id: 1, title: 'Python' },
    { id: 2, title: 'FastAPI' },
    { id: 3, title: 'Django' },
    { id: 4, title: 'Celery' },
    { id: 5, title: 'PostgreSQL' },
    { id: 6, title: 'MySQL' },
    { id: 7, title: 'Redis' },
    { id: 8, title: 'MongoDB' },
    { id: 9, title: 'RESTful API Design' },
  ],
};

const frontend: ISkill.Skill = {
  id: 1,
  category: 'Frontend / App',
  items: [
    { id: 1, title: 'TypeScript' },
    { id: 2, title: 'JavaScript' },
    { id: 3, title: 'React' },
    { id: 4, title: 'Next.js' },
    { id: 5, title: 'Flutter' },
    { id: 6, title: 'Dart' },
  ],
};

const devops: ISkill.Skill = {
  id: 2,
  category: 'DevOps & Infra',
  items: [
    { id: 1, title: 'Docker' },
    { id: 2, title: 'AWS' },
    { id: 3, title: 'Kubernetes' },
    { id: 4, title: 'Nginx' },
    { id: 5, title: 'Jenkins' },
    { id: 6, title: 'Linux / Shell scripting' },
  ],
};

const tools: ISkill.Skill = {
  id: 3,
  category: 'Tools',
  items: [
    { id: 1, title: 'Git / GitHub' },
    { id: 2, title: 'VS Code' },
    { id: 3, title: 'Vim' },
    { id: 4, title: 'Postman' },
  ],
};

const etc: ISkill.Skill = {
  id: 4,
  category: 'Other',
  items: [
    { id: 1, title: 'GraphQL' },
    { id: 2, title: 'FCM' },
    { id: 3, title: 'Web3.js' },
    { id: 4, title: 'Solidity' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, devops, tools, etc],
};

export default skill;
