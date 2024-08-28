import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import s from './Home.module.css';

const Home = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.homepage}>
      <div className={s.homeBox}>
        <h1>Your Phonebook is a few clicks away!</h1>
        {isLoggedIn ? (
          <NavLink to="/contacts" className={addActive}>
            Phonebook
          </NavLink>
        ) : (
          <NavLink to="/signup" className={addActive}>
            Sign Up
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Home;
