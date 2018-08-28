import { Action } from "redux";
import { ofType, StateObservable, } from "redux-observable";
import { Observable } from "rxjs";
import { filter, map, mergeMap, startWith, withLatestFrom } from "rxjs/operators";
import { fetchResoures } from "../../api";
import { ResourcesType } from "../../model";
import AppAction from "../actions";
import { IAppState } from "../state";
import { ILoadResource, loadingResource, resourceLoaded } from "./actions";
import { canLoadResourcePage } from "./selectors";

const fetchResouresStream$ = (resource: ResourcesType): Observable<AppAction> => fetchResoures(resource).pipe(
  map(payload => resourceLoaded(resource, 0, payload)),
  startWith(loadingResource(resource, 0)),
);

export const onLoad = (action$: Observable<Action>, state$: StateObservable<IAppState>): Observable<AppAction> => {
  return action$.pipe(
    ofType<ILoadResource>('@@ressource/LOAD'),
    withLatestFrom(state$),
    filter(([action, state]) => canLoadResourcePage(state, action.resource, action.pageNumber)),
    mergeMap(([action, state]) => fetchResouresStream$(action.resource)));
};