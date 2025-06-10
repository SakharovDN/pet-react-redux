import { Outlet } from 'react-router';

import { MainSidebar } from './MainSidebar/MainSidebar';

import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <MainSidebar />
      <Outlet />
    </div>
  );
};
