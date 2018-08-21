import { Action } from "redux";
import { ofType } from "redux-observable";
import { Observable } from "rxjs";
import { map, mergeMap, startWith } from "rxjs/operators";
import { fetchResoures } from "../../api";
import { ResourcesType } from "../../model";
import { ILoadResource, loadingResource, resourceLoaded } from "./actions";

const fetchResouresStream$ = (resource: ResourcesType) => fetchResoures(resource).pipe(
  map(payload => resourceLoaded(resource, payload)),
  startWith(loadingResource('films')),
);

export const onLoad = (action$: Observable<Action>): Observable<Action> => {
  return action$.pipe(
    ofType<ILoadResource>('@@ressource/LOAD'),
    mergeMap(action => fetchResouresStream$(action.resource)));
};