import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import userData from '../assets/userData.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
