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
  IVehiclesState,
} from "./state";

type ResourceState = IFilmsState | IPeopleState | ISpeciesState | IPlanetState | IStarshipState | IVehiclesState;

const createResourceReducer = <T extends ResourceState>(resource: ResourcesType) => {
  return (state: T, action: AppAction): T => {
    if (action.resource !== resource) {
      return state || initialPageState;
    }

    switch (action.type) {
      case '@@ressource/LOADING': {
        const { pageNumber } = action;
        const oldPage = getPage(state, pageNumber);
        const newPage = { ...oldPage, status: 'LOADING' };
        return setNewState(state, newPage, pageNumber);
      };
      case '@@ressource/LOADED': {
        const { pageNumber, pagesCount, content } = action;
        const oldPage = getPage(state, pageNumber);
        const newPage = { ...oldPage, content, status: 'LOADED' };
        const newState = setNewState(state, newPage, pageNumber);
        return { ...newState, pagesCount };
      }
    }

    return state;
  };
}

const setNewState = (state: any, newPage: any, pageNumber: number): any => {
  const newState = { ...state as any };
  newState[pageNumber] = newPage;
  return newState;
}

const getPage = (state: any, pageNumber: number): any => state[pageNumber] || initialPageState;


const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');
const species = createResourceReducer<ISpeciesState>('species');
const planets = createResourceReducer<IPlanetState>('planets');
const starships = createResourceReducer<IStarshipState>('starships');
const vehicles = createResourceReducer<IVehiclesState>('vehicles');

export default combineReducers({ films, people, species, planets, starships, vehicles });