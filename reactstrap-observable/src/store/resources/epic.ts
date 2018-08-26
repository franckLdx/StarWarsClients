import { Action } from "redux";
import { ofType, StateObservable, } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, mergeMap, startWith, withLatestFrom } from "rxjs/operators";
import { fetchResoures } from "../../api";
import { ResourcesType } from "../../model";
import { IAppState } from "../state";
import { ILoadResource, loadingResource, resourceLoaded } from "./actions";
import { canLoad } from "./selectors";

const fetchResouresStream$ = (resource: ResourcesType) => fetchResoures(resource).pipe(
  map(payload => resourceLoaded(resource, payload)),
  startWith(loadingResource(resource)),
);

export const onLoad = (action$: Observable<Action>, state$: StateObservable<IAppState>): Observable<Action> => {
  return action$.pipe(
    ofType<ILoadResource>('@@ressource/LOAD'),
    withLatestFrom(state$),
    filter(([action, state]) => canLoad(state, action.resource)),
    mergeMap(([action, state]) => fetchResouresStream$(action.resource)));
};