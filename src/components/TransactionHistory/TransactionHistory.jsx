import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.headItem}>Type</th>
          <th className={styles.headItem}>Amount</th>
          <th className={styles.headItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.transaction} key={item.id}>
            <td className={styles.bodyItem}>{item.type}</td>
            <td className={styles.bodyItem}>{item.amount}</td>
            <td className={styles.bodyItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
