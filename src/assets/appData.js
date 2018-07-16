import SocialIcons from './socialIcons';
import icon48 from './favicon48.png';
import icon72 from './favicon72.png';
import icon96 from './favicon96.png';

const {
  Email, GitHub, Linkedin, Twitter,
} = SocialIcons;

const formFields = [
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

const iconsAndLinks = [
  {
    icon: Email,
    link: `mailto:rhysbrooker01@gmail.com?subject=Email%20from%20RhysBrooker.com`,
  },
  {
    icon: GitHub,
    link: `https://github.com/105ron`,
  },
  {
    icon: Linkedin,
    link: `https://www.linkedin.com/in/rhysbrooker/`,
  },
  {
    icon: Twitter,
    link: `https://twitter.com/rhysonrails`,
  },
];

const manifest = {
  name: "MadeByRhys",
  short_name: "RhysB",
  start_url: ".",
  display: "standalone",
  background_color: "#fff",
  description: "A portfolio site, blog and projects of Rhys.",
  icons: [{
    rel: "icon",
    href: `${icon48}`,
    sizes: "48x48",
    type: "image/png",
  }, {
    rel: "icon",
    href: `${icon72}`,
    sizes: "72x72",
    type: "image/png",
  }, {
    rel: "icon",
    href: `${icon96}`,
    sizes: "96x96",
    type: "image/png",
  }],
};

const pages = [
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

const pageObject = {
  home: pages[0],
  about: pages[1],
  blogs: pages[2],
  projects: pages[3],
  contact: pages[4],
};


module.exports = {
  formFields,
  iconsAndLinks,
  manifest,
  pages,
  pageObject,
};
