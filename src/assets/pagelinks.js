const pages = [
  {name: 'Home', route: '/'},
  {name: 'About me', route: '/about/'},
  {name: 'Blogs', route: '/blog-posts/'},
  {name: 'Projects', route: '/projects/'},
  {name: 'Contact', route: '/contact/'}
];

const pageObject = {
  home: pages[0],
  about: pages[1],
  blogs: pages[2],
  projects: pages[3],
  contact: pages[4]
}

module.exports = {pages, pageObject};