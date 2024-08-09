import Profile from './Profile/Profile';
import userData from '../assets/userData.json';

export default function App() {
  return (
    <>
      <Profile {...userData} />
      {/* <FriendList /> */}
    </>
  );
}
