import { IFilm, tag as FilmTag } from './films';
import { IPeople, tag as PeopleTag } from './people';

export type ResourcesType = FilmTag | PeopleTag | 'species' | 'planets' | 'spaceships' | 'Vehicles';

export type ResourceData = IFilm | IPeople;

export const mapResourceToUrl = (resource: ResourcesType) => `/${resource}`;

export const mapUrlToResource = (url: string): ResourcesType => {
  const resource = url.split('/').pop();
  if (resource && isResource(resource)) {
    return resource;
  }
  throw new Error(`Unvalid URL: ${url}`);
};

export function isResource(resource: string): resource is ResourcesType {
  return ['films', 'people', 'species', 'planets', 'spaceships', 'Vehicles'].indexOf(resource) !== -1;
}
