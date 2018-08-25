import { IFilm, IPeople, IPlanets, ISpecies, IVehicle } from "../../model";
import { IStarship } from "../../model/starship";

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