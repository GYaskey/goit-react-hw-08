import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.navLinks}>
          <Navigation />
        </div>
        <div className={s.authSection}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
