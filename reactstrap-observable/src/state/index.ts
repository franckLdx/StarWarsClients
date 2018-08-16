import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { onLoad } from './loadResources';
import { loggerMiddleware } from './middelware';

const reducers = (state: any) => state;

export const history = createBrowserHistory();
const rootReducer = connectRouter(history)(reducers);

const rootEpic = combineEpics(onLoad);
const epicMiddleware = createEpicMiddleware();

const rootMiddleware = applyMiddleware(
  routerMiddleware(history), epicMiddleware, loggerMiddleware
);

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(rootMiddleware);

export const store = createStore(rootReducer, {}, enhancer);

epicMiddleware.run(rootEpic);