import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
      <NavLink to="/signup" className={styles.link}>
        Sign Up
      </NavLink>
    </div>
  );
};

export default AuthNav;
