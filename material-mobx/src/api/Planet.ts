import { IResourceRef } from 'src/model';
import { IPlanet } from 'src/model/Planet';
import { mapToRef } from './Tools';

export const mapPlanetToRef: (p: IPlanet) => IResourceRef = mapToRef;