import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '윤동준',
    small: '(Dongjun Yun)',
  },
  contact: [
    {
      id: 1,
      title: 'ydj0617@gmail.com',
      link: 'mailto:ydj0617@gmail.com',
      icon: faEnvelope,
    },
    // {
    //   id: 2,
    //   title: 'Please contact me by email',
    //   icon: faPhone,
    //   badge: true,
    // },
    {
      id: 3,
      link: 'https://github.com/newsoft111',
      icon: faGithub,
    },
  ],
  notice: {
    title: '커피챗을 좋아합니다. 언제든 편하게 대화해요! ☕',
    icon: faBell,
  },
};

export default profile;
