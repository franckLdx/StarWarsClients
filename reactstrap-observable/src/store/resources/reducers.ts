import { combineReducers } from "redux";
import { ResourceTagType, ResourceType } from "../../model";
import AppAction from "../actions";
import {
  defaultInitialPageState,
  IFilmsState,
  initialPageState,
  IPageResourceState,
  IPeopleState,
  IPlanetState,
  IResourceData,
  ISpeciesState,
  IStarshipState,
  IVehiclesState,
} from "./state";

type ResourceState = IFilmsState | IPeopleState | ISpeciesState | IPlanetState | IStarshipState | IVehiclesState;

const createResourceReducer = <T extends ResourceState>(resource: ResourceTagType) => {
  return (state: T, action: AppAction): T => {
    if (action.resource !== resource) {
      return state || initialPageState;
    }

    switch (action.type) {
      case '@@ressource/LOADING': {
        const { pageNumber } = action;
        const oldPage = getPage(state, pageNumber);
        const newPage = { ...oldPage, status: 'LOADING' };
        return setPage(state, newPage, pageNumber);
      };
      case '@@ressource/LOADED': {
        const { pageNumber, pagesCount, content } = action;
        const oldPage = getPage(state, pageNumber);
        const newPage: IPageResourceState<T> = { ...oldPage, ids: [...mapContentToIds(content)], status: 'LOADED' };
        const newData = { ...state.data, ...mapContentToData(content as ReadonlyArray<ResourceType>) };
        const newState = setPage(state, newPage, pageNumber);
        return { ...newState, pagesCount, data: newData };
      }
    }

    return state;
  };
}

const setPage = <T extends ResourceState>(state: T, newPage: any, pageNumber: number): any => {
  const newState = { ...state as any };
  newState[pageNumber] = newPage;
  return newState;
}

const getPage = <T extends ResourceState>(state: T, pageNumber: number) =>
  state[pageNumber] || defaultInitialPageState;

const mapContentToData = <T extends ResourceType>(content: ReadonlyArray<T>) => content.reduce(
  (acc, resource) => {
    const entry: IResourceData<T> = {};
    entry[resource.url] = resource;
    return { ...acc, ...entry };
  }, {} as IResourceData<T>
);


const mapContentToIds = (content: ReadonlyArray<ResourceType>) =>
  content.map(resource => resource.url);

const films = createResourceReducer<IFilmsState>('films');
const people = createResourceReducer<IPeopleState>('people');
const species = createResourceReducer<ISpeciesState>('species');
const planets = createResourceReducer<IPlanetState>('planets');
const starships = createResourceReducer<IStarshipState>('starships');
const vehicles = createResourceReducer<IVehiclesState>('vehicles');

export default combineReducers({ films, people, species, planets, starships, vehicles });