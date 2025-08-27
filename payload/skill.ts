import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  id: 0,
  category: 'Backend',
  items: [
    { id: 1, title: 'Python' },
    { id: 2, title: 'Java' },
    { id: 3, title: 'Kotlin' },
    { id: 4, title: 'FastAPI' },
    { id: 5, title: 'Spring' },
    { id: 6, title: 'Django' },
    { id: 7, title: 'Celery' },
    { id: 8, title: 'JPA' },
    { id: 9, title: 'SQLAlchemy' },
    { id: 10, title: 'PostgreSQL' },
    { id: 11, title: 'MySQL' },
    { id: 12, title: 'Redis' },
  ],
};

// const frontend: ISkill.Skill = {
//   id: 1,
//   category: 'Frontend / App',
//   items: [
//     { id: 1, title: 'TypeScript' },
//     { id: 2, title: 'JavaScript' },
//     { id: 3, title: 'React' },
//     { id: 4, title: 'Next.js' },
//     { id: 5, title: 'Flutter' },
//     { id: 6, title: 'Dart' },
//   ],
// };

const devops: ISkill.Skill = {
  id: 2,
  category: 'DevOps & Infra',
  items: [
    { id: 1, title: 'Docker' },
    { id: 2, title: 'Docker Compose' },
    { id: 3, title: 'AWS' },
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

// const etc: ISkill.Skill = {
//   id: 4,
//   category: 'Other',
//   items: [
//     { id: 1, title: 'GraphQL'},
//   ],
// };

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, tools],
};

export default skill;
