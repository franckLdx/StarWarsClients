import { combineReducers } from "redux";
import { ResourcesType } from "../../model";
import { IFilmsState } from "../state/films";
import { IPeopleState } from "../state/people";
import { ISpeciesState } from "../state/species";
import { AppActions } from "./actions";

type ResourceState = IFilmsState | IPeopleState | ISpeciesState;

const createResourceReducer = <T extends ResourceState>(resource: ResourcesType) => {
  return (state: T, action: AppActions): T => {
    if (action.resource !== resource) {
      return state || { status: 'NOT_LOADED', content: [] };
    }

    switch (action.type) {
      case '@@ressource/LOADING':
        return { ...(state as any), status: 'LOADING' };
      case '@@ressource/LOADED':
        return {
          ...(state as any), content: action.content, status: 'LOADED',
        }
    }

    return state;
  }
};

const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');
const species = createResourceReducer<ISpeciesState>('species');

export default combineReducers({ films, people, species });