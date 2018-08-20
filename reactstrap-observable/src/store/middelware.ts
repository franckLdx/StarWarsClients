import {
  Dispatch,
  Middleware,
  MiddlewareAPI,
} from 'redux'
import { mapUrlToResource } from '../model';
import { loadResource } from './resources/actions';

export const loggerMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => action => {
  if (action.type !== '@@router/LOCATION_CHANGE') {
    return next(action);
  }
  const resource = mapUrlToResource(action.payload.location.pathname);
  const result = next(action);
  store.dispatch(loadResource(resource));
  return result;
};
