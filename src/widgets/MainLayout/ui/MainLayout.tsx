import { Outlet } from 'react-router';

import { LangSelect } from '@/features/language';

import { MainSidebar } from './MainSidebar/MainSidebar';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <LangSelect />
      </header>
      <div className={styles.mainLayout}>
        <MainSidebar />
        <Outlet />
      </div>
    </>
  );
};
