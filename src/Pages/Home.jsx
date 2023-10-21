import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBudgets } from "../Redux/Reducers/BudgetReducer/reducer";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const { isAuth, name } = useSelector((store) => store.authState);
  const { budgets } = useSelector((store) => store.budgetState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getBudgets(dispatch);
  }, []);
  const totalAmount = budgets.reduce((acc, item) => acc + item.amount, 0);
  return (
    <>
      {isAuth ? (
        <div id={styles.welcome}>
          <h3>Hi! {name}</h3>
          <span>{`Your Budget : ₹${totalAmount}`}</span>
        </div>
      ) : (
        <div id={styles.pleaseLogin}>
          Please <Link to="/login">Login</Link> to view your wallet details
        </div>
      )}
      <div id={styles.buttonsContainer}>
        {isAuth && (
          <>
            <button className={styles.homePageButtons}>
              Transaction History
            </button>
            <button
              className={styles.homePageButtons}
              onClick={() => navigate("/withdraw")}
            >
              Withdraw
            </button>
          </>
        )}
        <button
          className={styles.homePageButtons}
          onClick={() => navigate("/add-budget")}
        >
          Add Budget
        </button>
      </div>
    </>
  );
};
