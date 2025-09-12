// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alfredo Cedeno',
  tagline: 'Cloud DevSecOps  - Photographer - HomeLab Enthusiast',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://alfredo.cedeno.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ajcborges', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

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
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ajcborges/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ajcborges/website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'blog',
        routeBasePath: 'blog',
        showReadingTime: true,
        // sidebarPath: './sidebarDevops.js',
        // ... other options
      },
    ],
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options for local search
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: 'en',      
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/intro-card.png",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "About Me",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'right',
            items: [
              {
                  label: 'Medium',
                  href: 'https://ajcborges.medium.com/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/11536667/alfredo-cedeno?tab=profile',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/alfredocedeno/',
              },
              {
                label: 'X',
                href: 'https://x.com/ajcborges',
              },
            ],
          },
           {
            href: "https://github.com/ajcborges",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          {
            className: "navbar__youtube navbar__icon",
            "aria-label": "YouTube channel",
            position: "right",
            href: "https://www.youtube.com/@ajcborges",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About Me',
              items: [
                {
                  label: 'My Journey',
                  to: '/docs/intro', /** needs to be change to docs/about_me/intro */
                },
              ],
            },
          {
            title: 'Community',
            items: [
              {
                  label: 'Medium',
                  href: 'https://ajcborges.medium.com/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/11536667/alfredo-cedeno?tab=profile',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/alfredocedeno/',
              },
              {
                label: 'X',
                href: 'https://x.com/ajcborges',
              },
            ],
          },
            {
            title: 'More',
              items: [
                {
                  label: "Blog",
                to: "/blog",
                },
                {
                  label: 'My Github',
                  href: 'https://github.com/ajcborges',
                },
                {
                  label: 'This website (as code)',
                  href: 'https://github.com/ajcborges/website',
                },
                {
                  label: 'Professional Development Plan (Private)',
                  href: 'https://github.com/ajcborges/pdp/projects/1',
                },
              ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alfredo Cedeno. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["latex"],
      },
    }),
};

export default config;
