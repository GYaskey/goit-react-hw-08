import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Navigation />
        <AuthNav />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </nav>
    </header>
  );
};

export default Header;
