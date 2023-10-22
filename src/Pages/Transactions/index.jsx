import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../Redux/Reducers/TransactionReducer/Action";
import TransactionCard from "../../Components/TransactionCard";
import styles from "./index.module.css";

const Transactions = () => {
  const { transactions } = useSelector((store) => store.transactionState);
  const dispatch = useDispatch();
  useEffect(() => {
    getTransactions(dispatch);
  }, []);
  return transactions.length == 0 ? (
    <div>No Transactions</div>
  ) : (
    <div>
      <h2 className={styles.heading}>Transaction History</h2>
      <div>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
