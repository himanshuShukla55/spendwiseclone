import styles from "./index.module.css";
const TransactionCard = ({ transaction }) => {
  const { budget_title, title, amount, time } = transaction;
  const transaction_time = new Date(time);
  return (
    <div className={styles.transactionCard}>
      <div className={styles.transactionInfo}>
        <div>
          <h3>{budget_title}</h3>
          <span>{title}</span>
        </div>
        <h1>{amount}</h1>
      </div>
      <p
        className={styles.transactionTime}
      >{`@${transaction_time.getHours()}:${transaction_time.getMinutes()} on ${transaction_time.getDate()}/${transaction_time.getMonth()}/${transaction_time.getFullYear()}`}</p>
    </div>
  );
};

export default TransactionCard;
