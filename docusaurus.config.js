// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github'); // You can customize this theme as needed
const darkCodeTheme = require('prism-react-renderer/themes/dracula'); // You can customize this theme as needed

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenBooks',
  tagline: 'Stories of Impossible Things',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'openbooks-org', // Your GitHub org/user name
  projectName: 'openbooks', // Your repo name

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/openbooks-org/openbooks/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/openbooks-org/openbooks/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Ensure your custom CSS is loaded
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light', // Set default color mode to light
        disableSwitch: false, // Enable the switcher in the navbar
        respectPrefersColorScheme: true, // Use the user's system preference if available
      },
      navbar: {
        title: '',
        logo: {
          alt: 'OpenBooks Logo',
          src: 'img/logo.svg', // Light mode logo
          srcDark: 'img/logo-dark.svg', // Dark mode logo (ensure this file exists!)
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/openbooks-org/openbooks',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light', // Changed from 'dark' to 'light' to match the white footer in light mode
        links: [
          {
            title: 'Docs',
            items: [{ label: 'Introduction', to: '/docs/intro' }],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/openbooks' },
              { label: 'Twitter', href: 'https://twitter.com/openbooks' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              {
                label: 'GitHub',
                href: 'https://github.com/openbooks-org/openbooks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenBooks. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme, // Use your desired light code theme
        darkTheme: darkCodeTheme, // Use your desired dark code theme
      },
    }),
};

module.exports = config;
