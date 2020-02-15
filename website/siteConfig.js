const path = require('path');

const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  customDocsPath: path.basename(__dirname) + '/docs',
  title: 'Creamie',
  tagline: 'A Front-end framework',
  url: 'https://creamie.now.sh',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'creamie-documentation',
  organizationName: 'haribalajiravi',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {href: 'https://gitter.im/creamie-cli/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link', label: 'Github'},
    {blog: true, label: 'Blog'}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/creamie.png',
  footerIcon: 'img/creamie.png',
  favicon: 'img/creamie.png',

  /* Colors for website */
  colors: {
    primaryColor: '#a25f0c',
    secondaryColor: '#5b1e06',
  },

  /* Custom fonts for website */

  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    overpass: [
      "Overpass",
      "sans-serif"
    ],
    lobster: [
      "Lobster",
      "cursive",
      "sans-serif"
    ]
  },
  

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}`,
  copyrightOwner: `Haribalaji Raviprakash`,
  ownerUrl: 'https://in.linkedin.com/in/haribalajiravi',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,
  repoUrl: 'https://github.com/haribalajiravi/creamie-cli',
};

module.exports = siteConfig;
