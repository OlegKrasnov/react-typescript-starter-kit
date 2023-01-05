import { ReactNode } from 'react';

export interface ComponentPropsInterface {
  children?: ReactNode;
  className?: string;
  isDarkTheme?: boolean;
}
