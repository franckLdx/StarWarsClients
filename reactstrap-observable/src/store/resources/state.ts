import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourceType } from "../../model";

export const initialCurrentPage = 1;

export interface IPageResourceState<T> {
  ids: string[];
  status: LoadingStatus;
}

export const initialPageResourceState: IPageResourceState<any> = {
  ids: [],
  status: 'NOT_LOADED',
};

export interface IResourceData<T extends ResourceType> {
  [id: string]: T
}
const initialIResourceData = {};

export interface IResourceState<T extends ResourceType> {
  pagesCount: number | undefined
  currentPage: number;
  [pageNumber: number]: IPageResourceState<T>
  data: IResourceData<T>
};

export const initialResourceState: IResourceState<any> = {
  currentPage: initialCurrentPage,
  data: initialIResourceData,
  pagesCount: undefined,
};
initialResourceState[initialResourceState.currentPage] = initialPageResourceState

export type IFilmsState = IResourceState<IFilm>;
export type ISpeciesState = IResourceState<ISpecie>;
export type IPeopleState = IResourceState<IPeople>;
export type IPlanetState = IResourceState<IPlanet>;
export type IStarshipState = IResourceState<IStarship>;
export type IVehiclesState = IResourceState<IVehicle>;