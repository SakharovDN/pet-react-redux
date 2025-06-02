import { SVGProps } from 'react';

import clsx from 'clsx';

import icons from './assets/icons.svg';

import styles from './Icon.module.scss';

export type IconName = 'check-circle' | 'hide' | 'show';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => {
  return (
    <svg className={clsx(styles.icon, className)} height={size} width={size} {...props}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};
