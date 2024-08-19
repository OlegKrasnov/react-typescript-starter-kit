export enum ButtonSizeType {
  large = 'large',
  medium = 'medium',
}

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonWidthType {
  fill = 'fill',
  hug = 'hug',
}

export interface ButtonInterface {
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  outline?: boolean;
  size?: ButtonSizeType;
  submit?: boolean;
  title: string;
  to?: string;
  type?: ButtonType;
  width?: ButtonWidthType;
}
