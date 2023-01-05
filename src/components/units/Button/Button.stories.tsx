import React from 'react';
// eslint-disable-next-line import/named
import { ComponentMeta, ComponentStory } from '@storybook/react';
import classNames from 'classnames';
import {
  ButtonInterface,
  ButtonSizeType,
  ButtonType,
  ButtonWidthType,
  ComponentPropsInterface
} from '../../../interfaces';
import { Button as ButtonComponent } from './Button';

const templateClassName = 'template';

export default {
  title: 'Elements/Button',
  component: ButtonComponent,
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    isDarkTheme: {
      control: 'boolean',
      defaultValue: false,
      name: 'Тёмная тема'
    },
    label: {
      control: 'text',
      defaultValue: '2.0'
    },
    onClick: {
      table: {
        disable: true
      }
    },
    outline: {
      control: 'boolean',
      defaultValue: false
    },
    size: {
      control: 'radio',
      defaultValue: ButtonSizeType.medium,
      options: [ButtonSizeType.large, ButtonSizeType.medium]
    },
    submit: {
      table: {
        disable: true
      }
    },
    title: {
      control: 'text',
      defaultValue: 'Button'
    },
    to: {
      table: {
        disable: true
      }
    },
    type: {
      control: 'radio',
      defaultValue: ButtonType.primary,
      options: [ButtonType.primary]
    },
    width: {
      control: 'radio',
      defaultValue: ButtonWidthType.hug,
      options: [ButtonWidthType.fill, ButtonWidthType.hug]
    }
  }
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args: ButtonInterface & ComponentPropsInterface) => (
  <div
    className={classNames(templateClassName, {
      [`${templateClassName}_dark-theme`]: args.isDarkTheme
    })}
  >
    <ButtonComponent {...args} />
  </div>
);

export const button = Template.bind({});
button.args = {};
