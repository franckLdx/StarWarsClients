import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { Resources } from "../resources";
import { AppActions } from "./actions";
import { IFilmsState } from "./state/films";
import { IPeopleState } from "./state/people";

type ResourceType = IFilmsState | IPeopleState;

const createResourceReducer = <T extends ResourceType>(resource: Resources) => {
  return (state: T, action: AppActions): T => {
    if (action.resource && action.resource !== 'films') {
      return state;
    }
    switch (action.type) {
      case 'LOAD_RESOURCE':
        return state;
      case 'LOADING_RESOURCE':
        return state;
      case 'RESOURCE_LOADED':
        return state;
      default:
        return { status: 'LOADING' } as T;
    }
  }
};

const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');

export const history = createBrowserHistory();
const combinedReducers = combineReducers({ films, people });

export const reducer = connectRouter(history)(combinedReducers);
