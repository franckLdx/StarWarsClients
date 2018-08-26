import { combineReducers } from "redux";
import { ResourcesType } from "../../model";
import AppAction from "../actions";
import { IFilmsState, IPeopleState, IPlanetState, ISpeciesState, IStarshipState, IVehiclesState } from "./state";

type ResourceState = IFilmsState | IPeopleState | ISpeciesState | IPlanetState | IStarshipState | IVehiclesState;

const createResourceReducer = <T extends ResourceState>(resource: ResourcesType) => {
  return (state: T, action: AppAction): T => {
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
const planets = createResourceReducer<IPlanetState>('planets');
const starships = createResourceReducer<IStarshipState>('starships');
const vehicles = createResourceReducer<IVehiclesState>('vehicles');

export default combineReducers({ films, people, species, planets, starships, vehicles });