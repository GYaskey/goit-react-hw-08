import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import s from './Layout.module.css';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.mainContent}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
