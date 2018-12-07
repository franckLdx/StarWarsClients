import { IResourceType } from 'src/store/Store';

export interface IMovie {
  id: string;
  name: string;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
  planets: IResourceType[];
  characters: IResourceType[];
  species: IResourceType[];
  starships: IResourceType[];
  vehicles: IResourceType[];
}

