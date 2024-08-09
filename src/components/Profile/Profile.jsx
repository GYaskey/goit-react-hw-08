const Profile = ({ username, tag, location, avatar, stats }) => {
  console.log(stats);
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      {/* <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul> */}
    </div>
  );
};

export default Profile;
