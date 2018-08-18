import { combineReducers } from "redux";
import { Resources } from "../../resources";
import { IFilmsState } from "../state/films";
import { IPeopleState } from "../state/people";
import { AppActions } from "./actions";

type ResourceState = IFilmsState | IPeopleState;

const createResourceReducer = <T extends ResourceState>(resource: Resources) => {
  return (state: T, action: AppActions): T => {
    if (action.resource !== resource) {
      return state || { status: 'LOADING' } as T;;
    }
    switch (action.type) {
      case '@@ressource/LOAD':
        return state;
      case '@@ressource/LOADING':
        return state;
      case '@@ressource/LOADED':
        return state;
    }
  }
};

const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');

export default combineReducers({ films, people });