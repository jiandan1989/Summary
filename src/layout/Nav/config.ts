export default {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    // children: 'https://source.unsplash.com/random/80x80',
    children: 'https://avatars3.githubusercontent.com/u/16014141?s=400&u=e432731469909d98b2e5ed969e7f80743c49c046&v=4',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'home',
        to: '/',
        children: '首页',
        className: 'menu-item',
      },
      {
        name: 'blogs',
        to: 'blogs',
        children: '博客',
        className: 'menu-item',
      },
      {
        name: 'about',
        to: 'about',
        children: '关于我',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
    ],
  },
};
