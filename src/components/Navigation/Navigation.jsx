import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <>
      <NavLink to="/" className={addActive}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={addActive}>
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
