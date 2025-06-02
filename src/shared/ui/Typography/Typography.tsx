import { DetailedHTMLProps, HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './Typography.module.scss';

interface BodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  bold?: boolean;
}
interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const Heading1 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 className={clsx(styles.heading1, styles.bold, className)} {...props}>
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h2 className={clsx(styles.heading2, styles.bold, className)} {...props}>
      {children}
    </h2>
  );
};

export const Heading3 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h3 className={clsx(styles.heading3, styles.bold, className)} {...props}>
      {children}
    </h3>
  );
};

export const Heading4 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h4 className={clsx(styles.heading4, styles.bold, className)} {...props}>
      {children}
    </h4>
  );
};

export const Heading5 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h5 className={clsx(styles.heading5, styles.bold, className)} {...props}>
      {children}
    </h5>
  );
};

export const Heading6 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h6 className={clsx(styles.heading6, styles.bold, className)} {...props}>
      {children}
    </h6>
  );
};

export const BodyXl = ({ children, bold, className, ...props }: BodyProps) => {
  return (
    <p className={clsx(styles.bodyXl, bold && styles.bold, className)} {...props}>
      {children}
    </p>
  );
};

export const BodyL = ({ children, bold, className, ...props }: BodyProps) => {
  return (
    <p className={clsx(styles.bodyL, bold && styles.bold, className)} {...props}>
      {children}
    </p>
  );
};

export const BodyM = ({ children, bold, className, ...props }: BodyProps) => {
  return (
    <p className={clsx(styles.bodyM, bold && styles.bold, className)} {...props}>
      {children}
    </p>
  );
};

export const BodyS = ({ children, bold, className, ...props }: BodyProps) => {
  return (
    <p className={clsx(styles.bodyS, bold && styles.bold, className)} {...props}>
      {children}
    </p>
  );
};

export const BodyXs = ({ children, bold, className, ...props }: BodyProps) => {
  return (
    <p className={clsx(styles.bodyXs, bold && styles.bold, className)} {...props}>
      {children}
    </p>
  );
};
