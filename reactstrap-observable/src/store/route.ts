import { Action } from "redux";
import { Observable, of } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";
import { mapHashToPageNumber, mapUrlToResource } from "../model";
import AppAction from "./actions";
import { loadResource } from "./resources/actions";

export const onRoute = (action$: Observable<Action>): Observable<AppAction> => {
  return action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    mergeMap((action: any) => {
      const { pathname, hash } = action.payload.location;
      const resource = mapUrlToResource(pathname);
      const pageNumber = mapHashToPageNumber(hash);
      return of(loadResource(resource, pageNumber));
    })
  );
};
