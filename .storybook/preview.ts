import { Preview } from '@storybook/react';
import '../src/assets/styles/main.scss';
import './style.stories.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen'
  }
};
export default preview;
