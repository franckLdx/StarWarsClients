import { IResourceRef } from './Tools';

export interface IMovie {
  id: string;
  title: string;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
  planets: IResourceRef[];
  characters: IResourceRef[];
  species: IResourceRef[];
  starships: IResourceRef[];
  vehicles: IResourceRef[];
}

