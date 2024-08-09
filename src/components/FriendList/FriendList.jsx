import { clsx } from 'clsx';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.friendList)}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={clsx(s.friendListItem)}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
