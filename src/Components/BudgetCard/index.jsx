import ProgressBar from "../ProgressBar";
import styles from "./index.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];
const BudgetCard = ({ budget }) => {
  const { title, end_date, amount, consumed } = budget;
  const completed = Math.floor((consumed * 100) / amount);
  const date = new Date(end_date);
  const endDate = `${date.getDay()}-${months[date.getMonth()]}`;
  return (
    <div className={styles.budgetCard}>
      <div className={styles.budgetCardDetails}>
        <div>
          <span>{title}</span>
          <h3>{`₹${amount}`}</h3>
        </div>
        <h4 className={styles.fadedText}>{endDate}</h4>
      </div>
      <ProgressBar completed={completed} />
      <div className={styles.consumedAndRemaining}>
        <span>{`₹${amount - consumed} remaining`}</span>
        <span className={styles.fadedText}>{`${completed}% used`}</span>
      </div>
    </div>
  );
};

export default BudgetCard;
