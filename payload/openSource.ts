import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Github Daily Commit',
      descriptions: [
        {
          content: 'GitHub 기여도 그래프에 잔디를 심기 위한 자동 커밋 스크립트',
        },
        {
          content: 'Bash 스크립트와 Crontab을 활용한 자동화된 일일 커밋 시스템',
        },
        {
          content: '매일 자동으로 커밋을 생성하여 GitHub 잔디밭을 관리',
        },
        {
          content: 'https://github.com/yuneast/github-daily-commit',
          href: 'https://github.com/yuneast/github-daily-commit',
        },
        {
          content: 'GitHub Stars: ',
          postImage:
            'https://img.shields.io/github/stars/yuneast/github-daily-commit.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
