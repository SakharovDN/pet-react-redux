import { MouseEvent, ReactNode } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon';

import styles from './Tag.module.scss';

type TagAppearance = 'default' | 'primary';
interface TagProps {
  children: ReactNode;
  size?: TagSize;
  className?: string;
  appearance?: TagAppearance;
  onRemove?: (e: MouseEvent<HTMLDivElement>) => void;
}
type TagSize = 'l' | 'm' | 's';

export const Tag = ({ children, size = 'm', appearance = 'default', onRemove, className }: TagProps) => {
  return (
    <div className={clsx(styles.tag, styles[size], styles[appearance], className)}>
      <div className={styles.content}>{children}</div>
      {onRemove && (
        <div className={styles.remove} onClick={onRemove}>
          <Icon name="remove" size={16} />
        </div>
      )}
    </div>
  );
};
