import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
// import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // 사진을 표시하려면 disableImage를 false로 설정하고 아래 image import와 image 설정의 주석을 해제하세요
  disableImage: true,
  // image: image,
  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  name: {
    title: '윤동준',
    small: '(Dongjun Yun)',
  },
  contact: [
    {
      title: 'ydj0617@gmail.com',
      link: 'mailto:ydj0617@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '+82 10-3633-9979',
      link: 'tel:+821036339979',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/yuneast',
      icon: faGithub,
    },
  ],
  notice: {
    title: '새로운 기회에 열려있습니다.',
    icon: faBell,
  },
};

export default profile;
