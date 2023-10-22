import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sytles from "./index.module.css";
import { updateBudget } from "../../Redux/Reducers/BudgetReducer/reducer";
import { addTransaction } from "../../Redux/Reducers/TransactionReducer/Action";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
  const { budgets } = useSelector((store) => store.budgetState);
  const [budgetID, setBudgetID] = useState(0);
  const [amount_withdrawn, setAmountWithDrawn] = useState("");
  const [maxAmount, setMaxAmount] = useState();
  const budget = useRef();
  const navigate = useNavigate();

  const handleBudgetChange = ({ target: { value } }) => {
    setBudgetID(value);
    setAmountWithDrawn("");
  };
  useEffect(() => {
    budget.current = budgets.filter((item) => item.id === +budgetID)[0];
    setMaxAmount(budget.current?.amount - budget.current?.consumed);
  }, [budgetID]);
  const handleAmountWithdrawn = ({ target: { value } }) => {
    if (value > maxAmount) alert(`You can withdraw maximum ₹${maxAmount}`);
    else setAmountWithDrawn(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ budgetID, budget: budget.current?.title, amount_withdrawn });
    await updateBudget({
      ...budget.current,
      consumed: budget.current?.consumed + +amount_withdrawn,
    });
    await addTransaction({
      title: `₹${amount_withdrawn} withdrawn from ${budget.current?.title}`,
      budget_title: budget.current?.title,
      amount: amount_withdrawn,
      time: new Date(),
    });
    navigate("/transactions");
  };
  return (
    <form id={sytles.withdrawForm} onSubmit={handleSubmit}>
      <label htmlFor="budget">
        <span>Select Budget</span>
        <select name="budget" onChange={handleBudgetChange}>
          <option value={0}>Select Budget</option>
          {budgets.map(({ id, title }, index) => (
            <option key={index} value={id}>
              {title}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="amount_withdrawn">
        <span>Amount to be withdrawn</span>
        <input
          type="text"
          value={amount_withdrawn}
          placeholder={
            maxAmount ? `withdraw less than ${maxAmount}` : "Amount Withdrawn"
          }
          onChange={handleAmountWithdrawn}
        />
      </label>
      <button type="submit">Withdraw</button>
    </form>
  );
};

export default Withdraw;
