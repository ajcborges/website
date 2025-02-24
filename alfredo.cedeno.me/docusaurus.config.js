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
    tagline: 'Hosting your own cloud infrastructure is cool',
    url: 'https://alfredo.cedeno.me',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/code-tech-dev-svgrepo-com.svg',
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
        image: 'img/undraw_post-online_cjn9.svg',
        navbar: {
          title: 'Alfredo Cedeno',
          logo: {
          //  alt: 'My Site Logo',
            src: 'img/user-svgrepo-com.svg',
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
                  label: 'X',
                  href: 'https://x.com/ajcborges',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
