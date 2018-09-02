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

const fetchResouresStream$ = (resource: ResourcesType, pageNumber: number): Observable<AppAction> =>
  fetchResoures(resource, pageNumber).pipe(
    map(response => resourceLoaded(resource, response.pageCount, pageNumber, response.pageContent)),
    startWith(loadingResource(resource, pageNumber)),
  );

export const onLoad = (action$: Observable<Action>, state$: StateObservable<IAppState>): Observable<AppAction> => {
  return action$.pipe(
    ofType<ILoadResource>('@@ressource/LOAD'),
    withLatestFrom(state$),
    filter(([action, state]) => canLoadResourcePage(state, action.resource, action.pageNumber)),
    mergeMap(([action, state]) => fetchResouresStream$(action.resource, action.pageNumber)));
};