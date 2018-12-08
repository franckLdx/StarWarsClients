import { IResourceType } from 'src/store/Store';

export interface ISpecie {
  name: string,
  classification: string,
  designation: string,
  averageHeight: string,
  skinColors: string[],
  hairColors: string,
  eyeColors: string[],
  averageLifespan: string,
  homeworld: IResourceType[],
  language: string,
  characters: IResourceType[],
  movies: IResourceType[],
  id: string
}
