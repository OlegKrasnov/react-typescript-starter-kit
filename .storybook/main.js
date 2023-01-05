module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.tsx']
};
