import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      {isOnline ? (
        <p className={styles.friendStatusOnline}>Online</p>
      ) : (
        <p className={styles.friendStatusOffline}>Offline</p>
      )}
    </>
  );
}
