import { Route, Routes } from 'react-router';

import { ErrorPage } from '@/pages/error';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<ErrorPage />} path="/" />
      </Routes>
    </div>
  );
};
