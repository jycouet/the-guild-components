// import type { StorybookConfig } from '@storybook/core-common';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: [
    '../packages/*/src/**/*.stories.mdx',
    '../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode', // addon to have toolbar for dark/light mode
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
  async webpackFinal(config) {
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.join(process.cwd(), 'tsconfig.json'),
      })
    );

    return config;
  },
};
