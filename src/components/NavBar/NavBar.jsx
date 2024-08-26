// import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
// import UserMenu from '../UserMenu/UserMenu';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <AuthNav />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </nav>
  );
};

export default NavBar;
