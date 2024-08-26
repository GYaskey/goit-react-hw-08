import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
