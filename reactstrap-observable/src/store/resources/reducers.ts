import { combineReducers } from "redux";
import { Resources } from "../../model";
import { IFilmsState } from "../state/films";
import { IPeopleState } from "../state/people";
import { AppActions } from "./actions";

type ResourceState = IFilmsState | IPeopleState;

const createResourceReducer = <T extends ResourceState>(resource: Resources) => {
  return (state: T, action: AppActions): T => {
    if (action.resource !== resource) {
      return state || { status: 'NOT_LOADED' };
    }
    switch (action.type) {
      case '@@ressource/LOADING': {
        const foo: any = state;
        return { ...foo, status: 'LOADING' };
      }
      case '@@ressource/LOADED': {
        const foo: any = state;
        return { ...foo, status: 'LOADED', content: action.content };
      }
    }
    return state;
  }
};

const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');

export default combineReducers({ films, people });