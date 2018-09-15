import { StateObservable } from "redux-observable";
import { merge, Observable, of } from "rxjs";
import { filter, mergeMap, withLatestFrom } from "rxjs/operators";
import { mapHashToPageNumber, mapUrlToResource } from "../app/routes";
import AppAction from "./actions";
import { loadResource, setCurrentPage } from "./resources/actions";
import { getResourceCurrentPage } from "./resources/selectors";
import { IAppState } from "./state";

export const onRoute = (action$: Observable<any>, state$: StateObservable<IAppState>): Observable<AppAction> => {
  const load$ = action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { pathname, hash } = action.payload.location;
      const resource = mapUrlToResource(pathname);
      const pageNumber = mapHashToPageNumber(hash) || getResourceCurrentPage(state, resource);
      return of(loadResource(resource, pageNumber));
    })
  );

  const currentPage$ = action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const { pathname, hash } = action.payload.location;
      const resource = mapUrlToResource(pathname);
      const pageNumber = mapHashToPageNumber(hash) || getResourceCurrentPage(state, resource);
      return of(setCurrentPage(resource, pageNumber));
    })
  );

  return merge(load$, currentPage$);
};
