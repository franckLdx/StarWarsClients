import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { reducer, defaultState } from "./reducers";

const store = createStore(
  reducer,
  defaultState(),
  applyMiddleware(thunk)
);

export default store;
