import { IResourceType } from 'src/store/Store';

export interface IStarship {
  id: string,
  name: string,
  model: string,
  class: string,
  manufacturer: string,
  cost: string,
  length: string,
  crew: string,
  passengers: string,
  maxAtmospheringSpeed: string,
  hyperdriveRating: string,
  mlgt: string,
  cargoCapacity: string,
  consumables: string,
  movies: IResourceType[];
}