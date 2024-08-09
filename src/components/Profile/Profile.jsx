import clsx from 'clsx';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={clsx(s.profile)}>
      <div className={clsx(s.imgBox)}>
        <img className={clsx(s.avatar)} src={avatar} alt={username} />
        <p className={clsx(s.title)}>{username}</p>
        <p className={clsx(s.imgText)}>@{tag}</p>
        <p className={clsx(s.imgText)}>{location}</p>
      </div>
      <ul className={clsx(s.statBox)}>
        <li className={clsx(s.statItem)}>
          <span className={clsx(s.statText)}>Followers</span>
          <span className={clsx(s.statNum)}>{stats.followers}</span>
        </li>
        <li className={clsx(s.statItem)}>
          <span className={clsx(s.statText)}>Views</span>
          <span className={clsx(s.statNum)}>{stats.views}</span>
        </li>
        <li className={clsx(s.statItem)}>
          <span className={clsx(s.statText)}>Likes</span>
          <span className={clsx(s.statNum)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
