import { combineReducers } from "redux";
import { ResourcesType } from "../../model";
import AppAction from "../actions";
import {
  IFilmsState,
  initialPageState,
  IPeopleState,
  IPlanetState,
  ISpeciesState,
  IStarshipState,
  IVehiclesState
} from "./state";

type ResourceState = IFilmsState | IPeopleState | ISpeciesState | IPlanetState | IStarshipState | IVehiclesState;

const createResourceReducer = <T extends ResourceState>(resource: ResourcesType) => {
  return (state: T, action: AppAction): T => {
    if (action.resource !== resource) {
      return state || initialPageState;
    }

    const page = state[action.pageNumber] || initialPageState;
    let newPage: any | undefined;
    switch (action.type) {
      case '@@ressource/LOADING':
        newPage = { ...page, status: 'LOADING' };
        break;
      case '@@ressource/LOADED':
        newPage = { ...page, content: action.content, status: 'LOADED' };
        break;
    }

    if (newPage !== undefined) {
      const newState = { ...state as any };
      newState[action.pageNumber] = newPage;
      return newState;
    }

    return state;
  };
}

const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');
const species = createResourceReducer<ISpeciesState>('species');
const planets = createResourceReducer<IPlanetState>('planets');
const starships = createResourceReducer<IStarshipState>('starships');
const vehicles = createResourceReducer<IVehiclesState>('vehicles');

export default combineReducers({ films, people, species, planets, starships, vehicles });