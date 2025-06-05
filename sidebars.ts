import { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: false,
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['Beginner','Intermediate','Advanced'],
    },
    'Quest','paper-trading','copy-trading','Journal','strategy-visualizer','Screener','Backtest','strategy-to-algo','in-work',

    {
      type: 'category',
      label: 'API',
      items: ['api-reference', 'untitled-page-1'],
    },
  ],
};

export default sidebars;
