import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from "../../model";

interface IPageResourceState<T> {
  status: LoadingStatus;
  content: T[];
}

interface IResourceState<T> {
  [pageNumber: string]: IPageResourceState<T>
};

export const initialPageState: IResourceState<any> = {
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