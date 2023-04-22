// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alfredo Cedeno',
  tagline: 'Hosting your own cloud infrastructure is cool',
  url: 'https://ajcborges.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ajcborges', 
  projectName: 'website', 
  trailingSlash: true,

  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ajcborges/website/tree/main/alfredo.cedeno.me',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ajcborges/website/tree/main/alfredo.cedeno.me',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Alfredo Cedeno',
        logo: {
        //  alt: 'My Site Logo',
          src: 'img/code-tech-dev-svgrepo-com.svg',
        },
        items: [
          /**{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },*/
          {
            type: 'doc',
            docId: 'intro',
            label: 'Docs',
            position: 'left',            
          },
          { to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          /**{
            to: '/about', 
            label: 'About', 
            position: 'left', 
          },  */        
          {
            href: 'https://github.com/ajcborges',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /**{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },*/
          {
            title: 'Blogs',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Medium',
                href: 'https://ajcborges.medium.com/',
              },
            ],
          },          
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/11536667/alfredo-cedeno?tab=profile',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/alfredocedeno/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ajcborges',
              },
            ],
          },
          {
            title: 'More',
            items: [
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
