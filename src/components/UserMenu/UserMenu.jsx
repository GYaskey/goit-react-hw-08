import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
      <p>Welcome, user</p>
      <button className={styles.signUp} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
