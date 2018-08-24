import { FilmTag, IFilm } from './films';
import { IPeople, PeopleTag } from './people';
import { IPlanets, PlanetTag } from './planets';
import { ISpecies, SpecieTag } from './species';

export type ResourcesType = FilmTag | PeopleTag | SpecieTag | PlanetTag | 'starships' | 'vehicles';
const resources = ['films', 'people', 'species', 'planets', 'starships', 'vehicles'];

export type ResourceData = IFilm | IPeople | ISpecies | IPlanets;

export const mapResourceToUrl = (resource: ResourcesType) => `/${resource}`;

export const mapUrlToResource = (url: string): ResourcesType => {
  const resource = url.split('/').pop();
  if (resource && isResource(resource)) {
    return resource;
  }
  throw new Error(`Unvalid URL: ${url}`);
};

export function isResource(resource: string): resource is ResourcesType {
  return resources.indexOf(resource) !== -1;
}
