const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Carol Pinheiro - Minhas anotações',
  tagline: 'Carol Pinheiro - Minhas anotações',
  url: 'http://sibelius.github.io',
  baseUrl: '/my-notes',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon-carol.png',
  organizationName: 'carolpinheiro', // Usually your GitHub org/user name.
  projectName: 'my-notes', // Usually your repo name.
  trailingSlash: false,
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Carol Pinheiro - Minhas anotações',
      logo: {
        alt: 'Carol minhas anotações',
        src: 'img/icon-carol.png',
      },
      items: [
        {
          to: 'tags',
          position: 'right',
          label: 'Tags',
        },
        {
          href: 'https://twitter.com/wyynde',
          position: 'right',
          label: '🐦',
        },
        {
          href: 'https://github.com/carolpinheiro',
          position: 'right',
          label: '🐙',
        },
        {
          href: 'https://github.com/carolpinheiro/my-notes',
          position: 'right',
          className: 'github-icon-header',
          html: '<img src="img/github-icon.svg" alt="github-icon" width="20px" />',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    footer: {
      links: [],
      copyright: 'Copyright © Carol Pinheiro',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/carolpinheiro/my-notes/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          editCurrentVersion: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3SK393X2BR',
          anonymizeIP: true,
        },
      },
    ],
  ],
};
