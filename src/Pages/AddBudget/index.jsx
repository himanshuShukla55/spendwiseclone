import { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import styles from "./index.module.css";

import "react-datepicker/dist/react-datepicker.css";
const AddBudget = () => {
  const [budget, setBudget] = useState({
    title: "",
    amount: "",
    start_date: null,
    end_date: null,
  });
  const clearForm = () => {
    setBudget({
      title: "",
      amount: "",
      start_date: null,
      end_date: null,
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    setBudget({ ...budget, [name]: value });
  };
  const updateDuration = ([start, end]) => {
    setBudget({ ...budget, start_date: start, end_date: end });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");
    try {
      const res = await axios.post(
        "https://spendwise-239r.onrender.com/budgets",
        { ...budget, active: false, consumed: 0 }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    clearForm();
  };
  const { title, amount, start_date, end_date } = budget;
  return (
    <form className={styles.addBudgetForm} onSubmit={handleSubmit}>
      <label htmlFor="title">
        Budget Category
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Enter Budget"
        />
      </label>
      <label htmlFor="duration">
        Duration
        <DatePicker
          selectsRange={true}
          isClearable={true}
          startDate={start_date}
          endDate={end_date}
          onChange={updateDuration}
          placeholderText="Select Date Range"
        />
      </label>
      <label htmlFor="amount">
        Amount
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={handleChange}
          placeholder="Enter Amount"
        />
      </label>
      <button type="submit">Confirm Budget</button>
    </form>
  );
};

export default AddBudget;
