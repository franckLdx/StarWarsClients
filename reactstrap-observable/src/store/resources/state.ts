import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourceType } from "../../model";

export const defaultPageNumber = 1;

export interface IPageResourceState<T> {
  status: LoadingStatus;
  ids: string[];
}

export interface IResourceData<T extends ResourceType> {
  [id: string]: T
}

export interface IResourceState<T extends ResourceType> {
  pagesCount: number | undefined
  [pageNumber: number]: IPageResourceState<T>
  data: IResourceData<T>
};

export const defaultInitialPageState: IPageResourceState<any> = {
  ids: [],
  status: 'NOT_LOADED',
};

export const initialPageState: IResourceState<any> = {
  data: {},
  pagesCount: undefined,
};
initialPageState[defaultPageNumber] = defaultInitialPageState

export type IFilmsState = IResourceState<IFilm>;
export type ISpeciesState = IResourceState<ISpecie>;
export type IPeopleState = IResourceState<IPeople>;
export type IPlanetState = IResourceState<IPlanet>;
export type IStarshipState = IResourceState<IStarship>;
export type IVehiclesState = IResourceState<IVehicle>;