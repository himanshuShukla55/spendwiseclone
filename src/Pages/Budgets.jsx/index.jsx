import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBudgets } from "../../Redux/Reducers/BudgetReducer/reducer";
import BudgetCard from "../../Components/BudgetCard";
import styles from "./index.module.css";

const Budgets = () => {
  const { budgets } = useSelector((store) => store.budgetState);
  const dispatch = useDispatch();
  useEffect(() => {
    getBudgets(dispatch);
  }, []);
  return (
    <>
      <div id={styles.budgetHeader}>
        <h3>{`Budgets (${budgets.length})`}</h3>
        <button className={styles.addBudgetBtn}>Add Budget</button>
      </div>
      {budgets.map((item) => (
        <BudgetCard key={item.id} budget={item} />
      ))}
    </>
  );
};

export default Budgets;
