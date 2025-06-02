import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import clsx from 'clsx';

import { Icon, IconName } from '../Icon/Icon';
import { Loader } from '../Loader/Loader';

import styles from './Button.module.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon?: IconName;
  block?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  iconPosition?: IconPosition;
  appearance?: ButtonAppearance;
}

type ButtonAppearance = 'accent' | 'flat' | 'outline' | 'primary' | 'secondary';
type ButtonSize = 'l' | 'm' | 's' | 'xs';
type IconPosition = 'end' | 'start';

export const Button = ({
  appearance = 'primary',
  iconPosition = 'start',
  size = 'm',
  className,
  children,
  disabled,
  loading,
  block,
  icon,
  ...props
}: ButtonProps) => {
  const loaderAndIconSize = size === 's' || size === 'xs' ? 16 : 24;
  const buttonStyles = clsx(
    styles.button,
    styles[appearance],
    styles[size],
    block && styles.block,
    loading && styles.loading,
    disabled && styles.disabled,
    iconPosition === 'end' && styles.rtl,
    className
  );

  return (
    <button className={buttonStyles} disabled={disabled || loading} {...props}>
      {loading && <Loader size={loaderAndIconSize} centered />}
      {icon && <Icon className={styles.icon} name={icon} size={loaderAndIconSize} />}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
