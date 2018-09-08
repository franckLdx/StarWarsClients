import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourceTagType, ResourceType } from "../../model";
import {
  IAppState
} from "../state";
import { defaultInitialPageState } from "./state";

export const getResource = (state: IAppState, resource: ResourceTagType) =>
  state[resource]

export const getResourceData = (state: IAppState, resource: ResourceTagType) =>
  state[resource].data

export const getDataById = (state: IAppState, resource: ResourceTagType, id: string) =>
  getResourceData(state, resource)[id];

export const getResourcePage = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResource(state, resource)[pageNumber] || defaultInitialPageState;

export const getResourcePageStatus = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResourcePage(state, resource, pageNumber).status;

export const getResourcePageIds = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResourcePage(state, resource, pageNumber).ids;

export const getResourcePageData = <T extends ResourceType>(state: IAppState, resource: ResourceTagType, pageNumber: number): T[] =>
  getResourcePageIds(state, resource, pageNumber).map(id => getDataById(state, resource, id)) as T[];

export const getResourcePagesCount = (state: IAppState, resource: ResourceTagType) =>
  getResource(state, resource).pagesCount;

export const canLoadResourcePage = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResourcePageStatus(state, resource, pageNumber) === 'NOT_LOADED'

export const getFilmsPageData = (state: IAppState, pageNumber: number): IFilm[] =>
  getResourcePageData<IFilm>(state, 'films', pageNumber);
export const getFilmPagesCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'films');

export const getPeoplePageData = (state: IAppState, pageNumber: number): IPeople[] =>
  getResourcePageData<IPeople>(state, 'people', pageNumber);
export const getPeoplePagesCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'people');

export const getPlanetsPageData = (state: IAppState, pageNumber: number): IPlanet[] =>
  getResourcePageData<IPlanet>(state, 'planets', pageNumber);
export const getPlanetsPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'planets');

export const getSpeciesPageData = (state: IAppState, pageNumber: number): ISpecie[] =>
  getResourcePageData<ISpecie>(state, 'species', pageNumber);
export const getSpeciesPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'species');

export const getStarshipsPageData = (state: IAppState, pageNumber: number): IStarship[] =>
  getResourcePageData<IStarship>(state, 'starships', pageNumber);
export const getStarshipsPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'starships');

export const getVehiclesPageData = (state: IAppState, pageNumber: number): IVehicle[] =>
  getResourcePageData<IVehicle>(state, 'vehicles', pageNumber);
export const getVehiclesPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'vehicles');