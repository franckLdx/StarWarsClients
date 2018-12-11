import { IResourceType } from 'src/store/Store';

export interface IPlanet {
  id: string;
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  surfaceWater: number;
  gravity: string;
  population: number;
  climate: string;
  terrain: string;
  residents: IResourceType[];
  movies: IResourceType[];
}