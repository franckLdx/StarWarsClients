import { Action } from "redux";
import { ofType } from "redux-observable";
import { Observable } from "rxjs";
import { map, mergeMap, startWith } from "rxjs/operators";
import { Resources } from "../resources";
import { ILoadResource, resourceLoaded } from "./actions";
import { fetchResoures } from "./api";

const fetchResouresStream$ = (resource: Resources) => fetchResoures(resource).pipe(
  map(payload => resourceLoaded(resource, payload)),
  startWith({ type: 'LOADING_RESOURCE', resource })
);

export const onLoad = (action$: Observable<Action>): Observable<Action> => {
  return action$.pipe(
    ofType<ILoadResource>('LOAD_RESOURCE'),
    mergeMap(action => fetchResouresStream$(action.resource)));
};