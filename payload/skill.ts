import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Python, Java, Kotlin' },
    { title: 'FastAPI, Django, Spring Boot' },
    { title: 'SQLAlchemy, JPA, QueryDSL' },
    { title: 'PostgreSQL, MySQL' },
    { title: 'Redis' },
    { title: 'Celery, SSE' },
  ],
};


const devops: ISkill.Skill = {
  category: 'DevOps & Infra',
  items: [
    { title: 'Docker, Docker Compose' },
    { title: 'AWS (EC2, S3, CloudWatch)' },
    { title: 'Nginx' },
    { title: 'Linux, Shell scripting' },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    { title: 'Git, GitHub' },
    { title: 'DBeaver' },
    { title: 'Postman' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devops, tools],
};

export default skill;
