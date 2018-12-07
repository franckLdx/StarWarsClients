import { IResourceType } from 'src/store/Store';

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
  homeworld: IResourceType,
  movies: IResourceType[],
  species: IResourceType[],
  vehicles: IResourceType[],
  starships: IResourceType[],
}
