import axios from "axios";

export const addTransaction = async (transaction) => {
  try {
    await axios.post(
      "https://spendwise-239r.onrender.com/transactions",
      transaction
    );
  } catch (error) {
    console.error(error);
  }
};
