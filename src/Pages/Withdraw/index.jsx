import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import sytles from "./index.module.css";

const Withdraw = () => {
  const { budgets } = useSelector((store) => store.budgetState);
  const [budgetID, setBudgetID] = useState(0);
  const [amount_withdrawn, setAmountWithDrawn] = useState("");
  const [maxAmount, setMaxAmount] = useState();
  const handleBudgetChange = ({ target: { value } }) => setBudgetID(value);
  const budget = useRef();
  useEffect(() => {
    budget.current = budgets.filter((item) => item.id === +budgetID)[0];
    setMaxAmount(budget.current?.amount - budget.current?.consumed);
  }, [budgetID]);
  const handleAmountWithdrawn = ({ target: { value } }) => {
    if (value > maxAmount) alert(`You can withdraw maximum ₹${maxAmount}`);
    else setAmountWithDrawn(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ budgetID, budget: budget.current?.title, amount_withdrawn });
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
