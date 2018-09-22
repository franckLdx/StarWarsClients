import { StateObservable } from "redux-observable";
import { Observable, of } from "rxjs";
import { filter, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { mapHashToPageNumber, mapUrlToResource } from "../../components/routes";
import AppAction from "../actions";
import { loadResource } from "../resources/actions";
import { IAppState } from "../state";

export const onRoute$ = (action$: Observable<any>, state$: StateObservable<IAppState>): Observable<AppAction> => {
  return action$.pipe(
    filter(action => action.type === '@@router/LOCATION_CHANGE'),
    map(mapToRouteData),
    filter(isPageNumberDefined),
    withLatestFrom(state$),
    mergeMap(loadPage)
  );
};

interface IRouteLocation {
  pathname: string;
  hash: string;
}

const mapToRouteData = (action: any): IRouteLocation => {
  const { pathname, hash } = action.payload.location;
  return { pathname, hash };
}

const isPageNumberDefined = ({ hash }: IRouteLocation) => hash !== '';

const loadPage = ([location, state]: [IRouteLocation, IAppState]) => {
  const resource = mapUrlToResource(location.pathname);
  const pageNumber = mapHashToPageNumber(location.hash);
  return of(loadResource(resource, pageNumber));
};