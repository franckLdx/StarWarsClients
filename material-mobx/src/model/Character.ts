import { IResourceRef } from './Tools';

export interface ICharacter {
  id: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: IResourceRef,
  movies: IResourceRef[],
  species: IResourceRef[],
  vehicles: IResourceRef[],
  starships: IResourceRef[],
}
