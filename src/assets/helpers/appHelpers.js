import {
  Email, GitHub, LinkedIn, Twitter,
} from './socialIcons';

export const formFields = [
  {
    label: 'First Name:',
    type: 'name',
    name: 'firstName',
    mandatory: true,
  },
  {
    label: 'Last Name:',
    type: 'name',
    name: 'lastName',
    mandatory: true,
  },
  {
    label: 'Email:',
    type: 'email',
    name: 'email',
    mandatory: true,
  },
  {
    label: 'Phone Number:',
    type: 'tel',
    name: 'phoneNumber',
    mandatory: false,
  },
];

export const iconsAndLinks = [
  {
    icon: Email,
    link: `mailto:rhysbrooker01@gmail.com?subject=Email%20from%20RhysBrooker.com`,
  },
  {
    icon: GitHub,
    link: `https://github.com/105ron`,
  },
  {
    icon: LinkedIn,
    link: `https://www.linkedin.com/in/rhysbrooker/`,
  },
  {
    icon: Twitter,
    link: `https://twitter.com/rhysonrails`,
  },
];

export const pages = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'About me',
    route: '/about/',
  },
  {
    name: 'Blogs',
    route: '/blog-posts/',
  },
  {
    name: 'Projects',
    route: '/projects/',
  },
  {
    name: 'Contact',
    route: '/contact/',
  },
];

export const pageObject = {
  home: pages[0],
  about: pages[1],
  blogs: pages[2],
  projects: pages[3],
  contact: pages[4],
};
