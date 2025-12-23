import { ISkill } from '../component/skill/ISkill';

const coreBackend: ISkill.Skill = {
  category: 'Core Backend',
  items: [
    { title: 'Python, Kotlin, Java' },
    { title: 'FastAPI, Spring Boot' },
    { title: 'PostgreSQL, MySQL' },
    { title: 'Redis' },
  ],
};

const asyncAndData: ISkill.Skill = {
  category: 'Async & Data',
  items: [
    { title: 'JPA' },
    { title: 'QueryDSL' },
    { title: 'SQLAlchemy' },
    { title: 'PostgreSQL' },
    { title: 'Docker' },
    { title: 'Celery' },
  ],
};

const infraAndOps: ISkill.Skill = {
  category: 'Infra & Ops',
  items: [{ title: 'Docker, GitHub Actions' }, { title: 'AWS, CloudWatch' }],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [coreBackend, asyncAndData, infraAndOps],
};

export default skill;
