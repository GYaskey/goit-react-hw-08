import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(s.friendItem)}>
      <img className={clsx(s.avatar)} src={avatar} alt="Avatar" width="80" />
      <p className={clsx(s.friendName)}>{name}</p>
      <p className={isOnline ? clsx(s.online) : clsx(s.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
