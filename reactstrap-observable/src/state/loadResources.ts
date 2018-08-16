import { Action } from "redux";
import { ofType } from "redux-observable";
import { Observable } from "rxjs";
import { map, mergeMap, startWith } from "rxjs/operators";
import { Resources } from "../resources";
import { fetchResoures } from "./api";

interface ILoadResource {
  type: 'LOAD_RESOURCE';
  resource: Resources;
}
export const loadResource = (resource: Resources): ILoadResource => ({ type: 'LOAD_RESOURCE', resource });

interface ILoadingResource {
  type: 'LOADING_RESOURCE';
  resource: Resources;
}
export const loadingResource = (resource: Resources): ILoadingResource => ({ type: 'LOADING_RESOURCE', resource });

interface IResourceLoaded {
  type: 'RESOURCE_LOADED';
  resource: Resources;
  content: any;
}
export const resourceLoaded = (resource: Resources, content: any): IResourceLoaded => ({ type: 'RESOURCE_LOADED', resource, content });

const fetchResouresStream$ = (resource: Resources) => fetchResoures(resource).pipe(
  map(payload => resourceLoaded(resource, payload)),
  startWith({ type: 'LOADING_RESOURCE', resource })
);

export const onLoad = (action$: Observable<Action>): Observable<Action> => {
  return action$.pipe(
    ofType<ILoadResource>('LOAD_RESOURCE'),
    mergeMap(action => fetchResouresStream$(action.resource)));
};