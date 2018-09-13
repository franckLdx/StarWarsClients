import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourceTagType, ResourceType } from "../../model";
import {
  IAppState
} from "../state";
import { initialPageResourceState } from "./state";

export const getResource = (state: IAppState, resource: ResourceTagType) =>
  state[resource]

export const getResourceData = (state: IAppState, resource: ResourceTagType) =>
  state[resource].data

export const getDataById = (state: IAppState, resource: ResourceTagType, id: string) =>
  getResourceData(state, resource)[id];

export const getResourcePage = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResource(state, resource)[pageNumber] || initialPageResourceState;

export const getResourcePageStatus = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResourcePage(state, resource, pageNumber).status;

export const getResourcePageIds = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResourcePage(state, resource, pageNumber).ids;

export const getResourcePageData = <T extends ResourceType>(state: IAppState, resource: ResourceTagType, pageNumber: number): T[] =>
  getResourcePageIds(state, resource, pageNumber).map(id => getDataById(state, resource, id)) as T[];

export const getResourcePagesCount = (state: IAppState, resource: ResourceTagType) =>
  getResource(state, resource).pagesCount;

export const getResourceCurrentPage = (state: IAppState, resource: ResourceTagType) =>
  getResource(state, resource).currentPage;

export const canLoadResourcePage = (state: IAppState, resource: ResourceTagType, pageNumber: number) =>
  getResourcePageStatus(state, resource, pageNumber) === 'NOT_LOADED'

export const getFilmsPageData = (state: IAppState, pageNumber: number): IFilm[] =>
  getResourcePageData<IFilm>(state, 'films', pageNumber)
    .sort((film1, film2) => film1.episodeId - film2.episodeId);
export const getFilmPagesCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'films');
export const getFilmCurrentPage = (state: IAppState) =>
  getResourceCurrentPage(state, 'films');

export const getPeoplePageData = (state: IAppState, pageNumber: number): IPeople[] =>
  getResourcePageData<IPeople>(state, 'people', pageNumber)
    .sort((people1, people2) => people1.name < people2.name ? -1 : 1);
export const getPeoplePagesCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'people');
export const getPeopleCurrentPage = (state: IAppState) =>
  getResourceCurrentPage(state, 'people');

export const getPlanetsPageData = (state: IAppState, pageNumber: number): IPlanet[] =>
  getResourcePageData<IPlanet>(state, 'planets', pageNumber)
    .sort((planet1, planet2) => planet1.name < planet2.name ? -1 : 1);
export const getPlanetsPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'planets');
export const getPlanetsCurrentPage = (state: IAppState) => getResourceCurrentPage(state, 'planets');

export const getSpeciesPageData = (state: IAppState, pageNumber: number): ISpecie[] =>
  getResourcePageData<ISpecie>(state, 'species', pageNumber)
    .sort((specie1, specie2) => specie1.name < specie2.name ? -1 : 1);
export const getSpeciesPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'species');
export const getSpeciesCurrentPage = (state: IAppState) =>
  getResourceCurrentPage(state, 'species');

export const getStarshipsPageData = (state: IAppState, pageNumber: number): IStarship[] =>
  getResourcePageData<IStarship>(state, 'starships', pageNumber)
    .sort((starship1, starship2) => starship1.name < starship2.name ? -1 : 1);
export const getStarshipsPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'starships');
export const getStarshipsCurrentPage = (state: IAppState) =>
  getResourceCurrentPage(state, 'starships');

export const getVehiclesPageData = (state: IAppState, pageNumber: number): IVehicle[] =>
  getResourcePageData<IVehicle>(state, 'vehicles', pageNumber)
    .sort((vehicle1, vehicle2) => vehicle1.name < vehicle2.name ? -1 : 1);
export const getVehiclesPageCount = (state: IAppState): number | undefined =>
  getResourcePagesCount(state, 'vehicles');
export const getVehiclesCurrentPage = (state: IAppState) =>
  getResourceCurrentPage(state, 'vehicles');
