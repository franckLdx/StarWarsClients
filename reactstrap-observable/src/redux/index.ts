import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'

const reducers = (state: any) => state;

export const history = createBrowserHistory();
const rootReducer = connectRouter(history)(reducers);
const rootMiddleware = applyMiddleware(
  routerMiddleware(history),
);

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(rootMiddleware);

export const store = createStore(rootReducer, {}, enhancer);