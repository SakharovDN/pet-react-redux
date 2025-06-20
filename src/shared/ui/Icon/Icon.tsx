import { SVGProps } from 'react';

import clsx from 'clsx';

import icons from './assets/icons.svg';

import styles from './Icon.module.scss';

export type IconName =
  | 'cards'
  | 'check-circle'
  | 'chevron-down'
  | 'chevron-left'
  | 'close'
  | 'heart'
  | 'hide'
  | 'login'
  | 'remove'
  | 'show';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  return (
    <svg
      className={clsx(styles.icon, className)}
      style={{ minHeight: size, minWidth: size }}
      height={size}
      width={size}
      {...props}
      viewBox="0 0 16 16">
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
