import axios from "axios";
import {
  GET_TRANSACTIONS_FAILURE,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
} from "./ActionTypes";

export const getTransactionsRequest = () => {
  return { type: GET_TRANSACTIONS_REQUEST };
};

export const getTransactionsSuccess = (transactions) => {
  return { type: GET_TRANSACTIONS_SUCCESS, payload: transactions };
};

export const getTransactionsFailure = (error) => {
  return { tyep: GET_TRANSACTIONS_FAILURE, payload: error };
};

export const getTransactions = async (dispatch) => {
  try {
    dispatch(getTransactionsRequest());
    const res = await axios.get(
      "https://spendwise-239r.onrender.com/transactions"
    );
    console.log(res);
    dispatch(getTransactionsSuccess(res.data));
  } catch (error) {
    console.error(error);
    dispatch(getTransactionsFailure(error));
  }
};

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
