import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
      <NavLink to="/signup" className={styles.link}>
        Sign Up
      </NavLink>
    </>
  );
};

export default AuthNav;
