import { IFilmsState } from './films';
import { IPeopleState } from './people';

export interface IAppState { films: IFilmsState, people: IPeopleState }