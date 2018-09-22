import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import resourcesReducer from "./resources/reducers";

const combinedReducers = combineReducers({
  resources: resourcesReducer,
});

export const history = createBrowserHistory();

export const reducer = connectRouter(history)(combinedReducers);