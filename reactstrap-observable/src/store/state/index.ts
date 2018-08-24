import { IFilmsState, IPeopleState, IPlanetState, ISpeciesState } from '../resources/state';

export interface IAppState {
  films: IFilmsState,
  people: IPeopleState,
  species: ISpeciesState,
  planets: IPlanetState,
}