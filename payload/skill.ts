import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Java, Spring Boot, JPA, QueryDSL' },
    { title: 'Python, FastAPI' },
  ],
};

const data: ISkill.Skill = {
  category: 'Database & Cache',
  items: [
    { title: 'PostgreSQL, MySQL, Redis' },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    { title: 'Docker, AWS, GitHub Actions' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, data, infrastructure],
};

export default skill;
