// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: '@',
    url: 'https://www.threads.com/@mas.dod16',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/dk',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Dodikunaedi16',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dodi-kunaedi',
  },
];

const resourceLinks = [
  // {
  //   label: 'Pillarstack',
  //   url: 'https://www.pillarstack.com',
  // },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/design/aRmD4vJdUfwgE5oXTv6SV9/portofolio-cuy-university?node-id=0-1&t=Hy0TscL8VOjPrwPp-1'
  },
];

const heroText =
  'Seorang pengembang full-stack lepas, membuat karya bagus sejak 2023, menyembunyikan hal-hal buruk sejak 2023.';

const locationPlace = `15°22'22.0"N 44°10'39.5"E`;
const locationCountry = 'Yemen, Sanaa';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
