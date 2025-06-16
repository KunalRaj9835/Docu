import { Config } from '@docusaurus/types';

const config: Config = {
  title: 'My Documentation',
  tagline: 'The go-to guide for your project',
  url: 'https://your-site.com', // Replace with your hosted URL
  baseUrl: '/', // Adjust if hosting on a subpath
  favicon: 'img/logo1.ico',
  projectName: 'docs-project', // Replace with your repo name
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blogs', position: 'left' },
        { to: 'https://dev.tradeved.com/', label: 'Site', position: 'left' },
        { to: 'docs/getting-started', label: 'Price', position: 'left' },
      ],
    },
    footer: {
      
      links: [
        {
          title: 'TradeVed',
          items: [
            { label: 'Docs', to: '/docs' },
            { label: 'Blog', to: '/blog' },
            { label: 'About Us', to: '/' },
            { label: 'Careers', to: '/' },
            { label: 'Advertise with us', to: '/' },
          ],
        },
        {
          title: 'Our Tools',
          items: [
            { label: 'Copy Trading', to: '/docs/copy-trading' },
            { label: 'Strategy Visualizer', to: '/docs/strategy-visualizer' },
            { label: 'Screener', to: '/docs/Screener' },
            { label: 'Backtest', to: '/docs/Backtest' },
            { label: 'Strategy to Algo', to: '/docs/strategy-to-algo' },
          ],
        },
        {
          title: 'Our Community',
          items: [
            { label: 'Whatsapp', to: '/' },
            { label: 'Discord', to: '/' },
            { label: 'Twitter', to: '/' },
            { label: 'Instagram', to: '/' },
            { label: 'Facebook', to: '/' },
          ],
        },
        {
          title: 'Support',
          items: [
            { label: 'Contact Us', to: '/' },
            { label: 'Product help', to: '/' },
            { label: 'Ticket', to: '/' },
            { label: 'Bug Bounty', to: '/' },
            { label: 'Report an isuue', to: '/' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Security', to: '/' },
            { label: 'Privacy Policy', to: '/' },
            { label: 'Terms and Conditions', to: '/' },
            { label: 'Cookies Policies', to: '/' },
            { label: 'Rewards Program', to: '/' },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
