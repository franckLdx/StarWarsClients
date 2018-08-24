import { Action } from "redux";
import { Observable, of } from "rxjs";
import { filter, mergeMap } from "rxjs/operators";
import { mapUrlToResource } from "../model";
import { loadResource } from "./resources/actions";

export const onRoute = (action$: Observable<Action>): Observable<Action> => {
  return action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    mergeMap((action: any) => {
      const resource = mapUrlToResource(action.payload.location.pathname);
      return of(loadResource(resource));
    })
  );
};
