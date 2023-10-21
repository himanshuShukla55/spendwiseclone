import styles from "./index.module.css";
const ProgressBar = ({ completed }) => {
  const findBackgroundColor = () => {
    if (completed < 50) return styles.green;
    else if (completed < 86) return styles.orange;
    return styles.red;
  };
  return (
    <div className={styles.progressBar}>
      <div
        className={`${styles.bar} ${findBackgroundColor()}`}
        style={{ width: completed + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
