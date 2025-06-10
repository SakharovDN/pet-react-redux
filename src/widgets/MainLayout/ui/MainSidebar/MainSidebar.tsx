import { useState } from 'react';
import { NavLink } from 'react-router';

import clsx from 'clsx';

import { Icon } from '@/shared/ui/Icon';
import { BodyS } from '@/shared/ui/Typography';

import styles from './MainSidebar.module.scss';

export const MainSidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={clsx(styles.mainSidebar, expanded && styles.expanded)}>
      <header className={styles.header}>
        <NavLink className={({ isActive }) => clsx(styles.sidebarItem, isActive && styles.active)} to="home">
          <Icon name="heart" size={16} />
          <BodyS> Home</BodyS>
        </NavLink>
      </header>

      <NavLink className={({ isActive }) => clsx(styles.sidebarItem, isActive && styles.active)} to="login">
        <Icon name="login" size={16} />
        <BodyS>Login</BodyS>
      </NavLink>

      <NavLink className={({ isActive }) => clsx(styles.sidebarItem, isActive && styles.active)} to="sputnik">
        <Icon name="cards" size={16} />
        <BodyS>ProductCard</BodyS>
      </NavLink>

      <footer className={styles.footer}>
        <button className={styles.sidebarItem} onClick={() => setExpanded((prev) => !prev)}>
          <Icon className={clsx(styles.collapseIcon, !expanded && styles.rotated)} name="chevron-left" size={16} />
          <BodyS>Collapse</BodyS>
        </button>
      </footer>
    </aside>
  );
};
