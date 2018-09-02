import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from "../../model";

export interface IPageResourceState<T> {
  status: LoadingStatus;
  content: T[];
}

export interface IResourceState<T> {
  pagesCount: number | undefined;
  [pageNumber: number]: IPageResourceState<T>
};

export const initialPageState: IResourceState<any> = {
  pagesCount: undefined,
  0: {
    content: [],
    status: 'NOT_LOADED',
  }
};

export type IFilmsState = IResourceState<IFilm>;
export type ISpeciesState = IResourceState<ISpecie>;
export type IPeopleState = IResourceState<IPeople>;
export type IPlanetState = IResourceState<IPlanet>;
export type IStarshipState = IResourceState<IStarship>;
export type IVehiclesState = IResourceState<IVehicle>;