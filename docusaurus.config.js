// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tusk',
  tagline: 'A Language for Discord Bots',
  favicon: 'logo.png',

  // Set the production url of your site here
  url: 'https://tusk.tutla.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TutlaMC', // Usually your GitHub org/user name.
  projectName: 'tusk', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TutlaMC/tusk/tree/main/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'logo.png',
      navbar: {
        title: '',
        logo: { src: 'img/logo.svg', alt: 'Tusk Logo' },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          { to: '/docs/home', label: 'Docs', position: 'left' },
          { href: 'https://discord.tutla.net', label: 'Discord', position: 'left' },
          {
            href: 'https://github.com/tutlamc/tusk',
            label: 'Download',
            position: 'right',
            className: 'navbar-download-button',
          },
        ],
      },
      footer: {},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
