import { legacy_createStore } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const store = legacy_createStore(rootReducer, devToolsEnhancer());