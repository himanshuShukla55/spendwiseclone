import { combineReducers } from "redux";
import { reducer as authReducer } from "../AuthReducer/reducer";
import { reducer as budgetReducer } from "../BudgetReducer/reducer";
import { reducer as transactionReducer } from "../TransactionReducer/reducer";

export const rootReducer = combineReducers({
  authState: authReducer,
  budgetState: budgetReducer,
  transactionState: transactionReducer,
});
