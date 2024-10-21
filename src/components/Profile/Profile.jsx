import stylesProfile from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={stylesProfile.card}>
      <div className={stylesProfile.titleBlock}>
        <img
          className={stylesProfile.userPhoto}
          src={image}
          alt="User avatar"
        />
        <p className={stylesProfile.userName}>{name}</p>
        <p className={stylesProfile.userInfo}>@{tag}</p>
        <p className={stylesProfile.userInfo}>{location}</p>
      </div>
      <ul className={stylesProfile.userStatsList}>
        <li className={stylesProfile.userStatsItem}>
          <span>Followers</span>
          <span className={stylesProfile.userStatsValue}>
            {stats.followers}
          </span>
        </li>
        <li className={stylesProfile.userStatsItem}>
          <span>Views</span>
          <span className={stylesProfile.userStatsValue}>{stats.views}</span>
        </li>
        <li className={stylesProfile.userStatsItem}>
          <span>Likes</span>
          <span className={stylesProfile.userStatsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
