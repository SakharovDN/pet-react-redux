import { Navigate, Route, Routes } from 'react-router';

import { MainLayout } from '@/widgets/MainLayout';

import { LoginPage } from '@/pages/login';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Navigate to="/home" replace />} path="*" index />
          <Route element={<div>Home</div>} path="home" />
          <Route element={<LoginPage />} path="login" />
        </Route>
      </Routes>
    </div>
  );
};
