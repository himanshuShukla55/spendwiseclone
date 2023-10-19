import { legacy_createStore,combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { authReducer } from "./AuthReducer/reducer";
import {budgetReducer} from './BudgetReducer/reducer'


const rootReducer=combineReducers({authReducer,booksReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
