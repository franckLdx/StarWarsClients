import { IFilm, IPeople, IPlanets, ISpecies, IStarship, IVehicle } from "../../model";

interface IResourceState<T> {
  status: LoadingStatus;
  content: T[];
}

export type IFilmsState = IResourceState<IFilm>;
export type ISpeciesState = IResourceState<ISpecies>;
export type IPeopleState = IResourceState<IPeople>;
export type IPlanetState = IResourceState<IPlanets>;
export type IStarshipState = IResourceState<IStarship>;
export type IVehiclesState = IResourceState<IVehicle>;