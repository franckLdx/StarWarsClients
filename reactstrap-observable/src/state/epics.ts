import { Action } from "redux";
import { ofType } from "redux-observable";
import { Observable } from "rxjs";
import { mapTo } from "rxjs/operators";

export const onLoad = (action$: Observable<Action>): Observable<Action> => {
  return action$.pipe(
    ofType('@@router/LOCATION_CHANGE'),
    mapTo({ type: 'PONG' })
  );
};