import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './Page.module.scss';

interface PageProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

export const Page = ({ children, className, title }: PageProps) => {
  return (
    <div className={clsx(styles.page, className)}>
      <title>{title}</title>
      {children}
    </div>
  );
};
