import { Action } from "redux";
import { merge, Observable, of } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";
import { mapHashToPageNumber, mapUrlToResource } from "../app/routes";
import AppAction from "./actions";
import { loadResource, setCurrentPage } from "./resources/actions";
import { initialCurrentPage } from "./resources/state";

export const onRoute = (action$: Observable<Action>): Observable<AppAction> => {
  const load$ = action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    mergeMap((action: any) => {
      const { pathname, hash } = action.payload.location;
      const resource = mapUrlToResource(pathname);
      const pageNumber = mapHashToPageNumber(hash) || initialCurrentPage;
      return of(loadResource(resource, pageNumber));
    })
  );

  const currentPage$ = action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    mergeMap((action: any) => {
      const { pathname, hash } = action.payload.location;
      const resource = mapUrlToResource(pathname);
      const pageNumber = mapHashToPageNumber(hash) || initialCurrentPage;
      return of(setCurrentPage(resource, pageNumber));
    })
  );

  return merge(load$, currentPage$);
};
