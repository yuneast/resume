import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Python' },
    { title: 'Java' },
    { title: 'Kotlin' },
    { title: 'FastAPI' },
    { title: 'Spring' },
    { title: 'Django' },
    { title: 'JPA' },
    { title: 'SQLAlchemy' },
    { title: 'PostgreSQL' },
    { title: 'MySQL' },
    { title: 'Redis' },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps & Infra',
  items: [
    { title: 'Docker' },
    { title: 'Docker Compose' },
    { title: 'AWS' },
    { title: 'Nginx' },
    { title: 'Jenkins' },
    { title: 'Linux / Shell scripting' },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    { title: 'Git / GitHub' },
    { title: 'VS Code' },
    { title: 'IntelliJ' },
    { title: 'DBeaver' },
    { title: 'Postman' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, tools],
};

export default skill;
