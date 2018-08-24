import { routerMiddleware } from 'connected-react-router'
import { Action, applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { history, reducer } from './reducers';
import { onLoad } from './resources/epic';
import { onRoute } from './route';
import { IAppState } from './state';

const rootEpic = combineEpics<Action, Action, IAppState>(onLoad, onRoute);
const epicMiddleware = createEpicMiddleware();

const rootMiddleware = applyMiddleware(
  routerMiddleware(history), epicMiddleware
);

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(rootMiddleware);

const store = createStore(reducer, {}, enhancer);

epicMiddleware.run(rootEpic as any);

export { store, history };