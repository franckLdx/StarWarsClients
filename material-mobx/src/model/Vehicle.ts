import { IResourceType } from 'src/store/Store';

export interface IVehicle {
  id: string;
  name: string;
  class: string;
  cost: string;
  crew: string;
  length: string;
  manufacturer: string;
  model: string;
  movies: IResourceType[],
  passengers: number;
  pilots: IResourceType[],
}