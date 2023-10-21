import axios from "axios";
import {
  getBudgetsFailed,
  getBudgetsRequest,
  getBudgetsSuccess,
} from "./Actions";
import {
  GET_BUDGETS_FAILED,
  GET_BUDGETS_REQUEST,
  GET_BUDGETS_SUCCESS,
} from "./actionTypes";

const initialState = {
  loading: false,
  budgets: [],
  success: false,
  error: null,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BUDGETS_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GET_BUDGETS_SUCCESS:
      return { ...state, loading: false, budgets: payload, success: true };
    case GET_BUDGETS_FAILED:
      return { loading: false, budgets: [], success: false, error: payload };
    default:
      return state;
  }
};

export const getBudgets = async (dispatch) => {
  try {
    dispatch(getBudgetsRequest());
    const res = await axios.get("https://spendwise-239r.onrender.com/budgets");
    dispatch(getBudgetsSuccess(res.data));
  } catch (error) {
    console.error(error);
    dispatch(getBudgetsFailed(error));
  }
};

export const updateBudget = async (budget) => {
  try {
    await axios.patch(
      `https://spendwise-239r.onrender.com/budgets/${budget.id}`,
      budget
    );
  } catch (error) {
    console.error(error);
  }
};
