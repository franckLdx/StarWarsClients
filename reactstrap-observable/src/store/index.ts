import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { loggerMiddleware } from './middelware';
import { history, reducer } from './reducers';
import { onLoad } from './resources/load';

const rootEpic = combineEpics(onLoad);
const epicMiddleware = createEpicMiddleware();

const rootMiddleware = applyMiddleware(
  routerMiddleware(history), epicMiddleware, loggerMiddleware
);

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(rootMiddleware);

const store = createStore(reducer, {}, enhancer);

epicMiddleware.run(rootEpic);

export { store, history };