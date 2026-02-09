import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Java' },
    { title: 'Spring Boot' },
    { title: 'Python' },
    { title: 'FastAPI' },
    { title: 'PHP' },
    { title: 'Laravel' },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'React' },
    { title: 'Next.js' },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    { title: 'PostgreSQL' },
    { title: 'MySQL' },
    { title: 'Redis' },
    { title: 'JPA, QueryDSL' },
    { title: 'SQLAlchemy' },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    { title: 'Docker' },
    { title: 'AWS' },
    { title: 'GitHub Actions' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, database, devops],
};

export default skill;
