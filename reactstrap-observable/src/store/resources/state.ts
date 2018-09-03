import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from "../../model";

export const defaultPageNumber = 1;

export interface IPageResourceState<T> {
  status: LoadingStatus;
  content: T[];
}

export interface IResourceState<T> {
  pagesCount: number | undefined;
  [pageNumber: number]: IPageResourceState<T>
};

export const defaultInitialPageState: IPageResourceState<any> = {
  content: [],
  status: 'NOT_LOADED',
};

export const initialPageState: IResourceState<any> = {
  pagesCount: undefined,
};
initialPageState[defaultPageNumber] = defaultInitialPageState

export type IFilmsState = IResourceState<IFilm>;
export type ISpeciesState = IResourceState<ISpecie>;
export type IPeopleState = IResourceState<IPeople>;
export type IPlanetState = IResourceState<IPlanet>;
export type IStarshipState = IResourceState<IStarship>;
export type IVehiclesState = IResourceState<IVehicle>;