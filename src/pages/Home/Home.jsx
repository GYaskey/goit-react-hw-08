import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h1>Your Phonebook is few clicks away!</h1>
      {isLoggedIn ? (
        <Link to="/contacts">Phonebook</Link>
      ) : (
        <Link to="/signup">Sign Up</Link>
      )}
    </div>
  );
};

export default Home;
