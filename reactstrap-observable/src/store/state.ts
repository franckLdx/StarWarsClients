import {
  IFilmsState,
  IPeopleState,
  IPlanetState,
  ISpeciesState,
  IStarshipState,
  IVehiclesState
} from './resources/state';

export interface IAppState {
  films: IFilmsState,
  people: IPeopleState,
  species: ISpeciesState,
  planets: IPlanetState,
  starships: IStarshipState,
  vehicles: IVehiclesState,
}