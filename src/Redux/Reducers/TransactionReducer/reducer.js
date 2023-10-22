import {
  GET_TRANSACTIONS_FAILURE,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
} from "./ActionTypes";

const initialState = {
  loading: false,
  transactions: [],
  error: null,
  success: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TRANSACTIONS_REQUEST:
      return { ...state, loading: true, error: null, success: false };
    case GET_TRANSACTIONS_SUCCESS:
      return { ...state, loading: false, transactions: payload, success: true };
    case GET_TRANSACTIONS_FAILURE:
      return { ...state, loading: false, error: payload, success: false };
    default:
      return state;
  }
};
