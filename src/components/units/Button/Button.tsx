import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
  ButtonInterface,
  ButtonSizeType,
  ButtonType,
  ButtonWidthType,
  ComponentPropsInterface
} from '../../../interfaces';
import buttonStyles from './Button.module.scss';

const buttonClassName = 'button';

const Button: FC<ButtonInterface & ComponentPropsInterface> = ({
  className,
  disabled = false,
  isDarkTheme = false,
  label,
  onClick,
  outline = false,
  size = ButtonSizeType.medium,
  title,
  to,
  submit,
  type = ButtonType.primary,
  width = ButtonWidthType.hug
}) => {
  const componentClassName = classNames([
    buttonStyles[buttonClassName],
    {
      [buttonStyles[`${buttonClassName}_dark-theme`]]: isDarkTheme,
      [buttonStyles[`${buttonClassName}_outline`]]: outline,
      [buttonStyles[`${buttonClassName}_${size}`]]: size,
      [buttonStyles[`${buttonClassName}_${type}`]]: type,
      [buttonStyles[`${buttonClassName}_${width}`]]: width
    },
    className
  ]);

  return to ? (
    <Link className={componentClassName} onClick={onClick} to={to}>
      {title}
      {label && <span>{label}</span>}
    </Link>
  ) : (
    <button className={componentClassName} disabled={disabled} onClick={onClick} type={submit ? 'submit' : 'button'}>
      {title}
      {label && <span>{label}</span>}
    </button>
  );
};

export { Button };
