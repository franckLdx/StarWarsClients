import { IResourceRef } from 'src/model';
import { IStarship } from 'src/model/Starship';
import { mapToRef } from './Tools';

export const mapStarshipToRef: (s: IStarship) => IResourceRef = mapToRef;