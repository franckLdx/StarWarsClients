import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourceType } from "../../model";
import {
  defaultPageNumber,
  IAppState
} from "../state";
import { defaultInitialPageState } from "./state";

export const getResource = (state: IAppState, resource: ResourceType) => state[resource]

export const getResourcePage = (state: IAppState, resource: ResourceType, pageNumber: number) => state[resource][pageNumber] || defaultInitialPageState;
export const getResourcePageStatus = (state: IAppState, resource: ResourceType, pageNumber: number) => getResourcePage(state, resource, pageNumber).status;
const getResourcePageContent = <T>(state: IAppState, resource: ResourceType, pageNumber: number): T[] => {
  return getResourcePage(state, resource, pageNumber).content as any as T[];
}
export const canLoadResourcePage = (state: IAppState, resource: ResourceType, pageNumber: number) => getResourcePageStatus(state, resource, defaultPageNumber) === 'NOT_LOADED'
export const getResourcePagesCount = (state: IAppState, resource: ResourceType) => getResource(state, resource).pagesCount;

export const getFilmsPageContent = (state: IAppState, pageNumber: number): IFilm[] => getResourcePageContent<IFilm>(state, 'films', pageNumber);
export const getFilmPagesCount = (state: IAppState): number | undefined => getResourcePagesCount(state, 'films');

export const getPeoplePageContent = (state: IAppState, pageNumber: number): IPeople[] => getResourcePageContent<IPeople>(state, 'people', pageNumber);
export const getPeoplePagesCount = (state: IAppState): number | undefined => getResourcePagesCount(state, 'people');

export const getPlanetsPageContent = (state: IAppState, pageNumber: number): IPlanet[] => getResourcePageContent<IPlanet>(state, 'planets', pageNumber);
export const getPlanetsPageCount = (state: IAppState): number | undefined => getResourcePagesCount(state, 'planets');

export const getSpeciesPageContent = (state: IAppState, pageNumber: number): ISpecie[] => getResourcePageContent<ISpecie>(state, 'species', pageNumber);
export const getSpeciesPageCount = (state: IAppState): number | undefined => getResourcePagesCount(state, 'species');

export const getStarshipsPageContent = (state: IAppState, pageNumber: number): IStarship[] => getResourcePageContent<IStarship>(state, 'starships', pageNumber);
export const getStarshipsPageCount = (state: IAppState): number | undefined => getResourcePagesCount(state, 'starships');

export const getVehiclesPageContent = (state: IAppState, pageNumber: number): IVehicle[] => getResourcePageContent<IVehicle>(state, 'vehicles', pageNumber);
export const getVehiclesPageCount = (state: IAppState): number | undefined => getResourcePagesCount(state, 'vehicles');