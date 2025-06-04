import { Route, Routes } from 'react-router';

import { LoginPage } from '@/pages/login';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<div>Home</div>} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </div>
  );
};
