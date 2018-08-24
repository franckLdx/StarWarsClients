import { IFilmsState } from './films';
import { IPeopleState } from './people';
import { ISpeciesState } from './species';

export interface IAppState {
  films: IFilmsState,
  people: IPeopleState,
  species: ISpeciesState
}