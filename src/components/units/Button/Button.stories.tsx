import React from 'react';
import classNames from 'classnames';
import {
  ButtonInterface,
  ButtonSizeType,
  ButtonType,
  ButtonWidthType,
  ComponentPropsInterface,
} from '../../../interfaces';
import { Button } from './Button';

const templateClassName = 'template';

export default {
  args: {
    disabled: false,
    isDarkTheme: false,
    label: '2.0',
    outline: false,
    size: ButtonSizeType.medium,
    title: 'Button',
    type: ButtonType.primary,
    width: ButtonWidthType.hug,
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    isDarkTheme: {
      name: 'Тёмная тема',
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: 'radio' },
      options: [ButtonSizeType.large, ButtonSizeType.medium],
    },
    submit: {
      table: {
        disable: true,
      },
    },
    to: {
      table: {
        disable: true,
      },
    },
    type: {
      options: [ButtonType.primary],
    },
    width: {
      options: [ButtonWidthType.fill, ButtonWidthType.hug],
    },
  },
  component: Button,
  title: 'Elements/Button',
};

export const button = (args: ButtonInterface & ComponentPropsInterface) => (
  <div
    className={classNames(templateClassName, {
      [`${templateClassName}_dark-theme`]: args.isDarkTheme,
    })}
  >
    <Button {...args} />
  </div>
);
