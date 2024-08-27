import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <>
      <NavLink to="/login" className={addActive}>
        Login
      </NavLink>
      <NavLink to="/signup" className={addActive}>
        Sign Up
      </NavLink>
    </>
  );
};

export default AuthNav;
