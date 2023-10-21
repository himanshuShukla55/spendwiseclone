import {
  GET_BUDGETS_FAILED,
  GET_BUDGETS_REQUEST,
  GET_BUDGETS_SUCCESS,
} from "./actionTypes";

export const getBudgetsRequest = () => {
  return { type: GET_BUDGETS_REQUEST };
};

export const getBudgetsSuccess = (budgets) => {
  return { type: GET_BUDGETS_SUCCESS, payload: budgets };
};

export const getBudgetsFailed = (error) => {
  return { type: GET_BUDGETS_FAILED, payload: error };
};
