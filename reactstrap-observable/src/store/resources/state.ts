import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle } from "../../model";

interface IResourceState<T> {
  status: LoadingStatus;
  content: T[];
}

export type IFilmsState = IResourceState<IFilm>;
export type ISpeciesState = IResourceState<ISpecie>;
export type IPeopleState = IResourceState<IPeople>;
export type IPlanetState = IResourceState<IPlanet>;
export type IStarshipState = IResourceState<IStarship>;
export type IVehiclesState = IResourceState<IVehicle>;