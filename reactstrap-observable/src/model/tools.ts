import { FilmTag, IFilm, IPeople, IPlanet, ISpecie, PeopleTag, PlanetTag, SpecieTag, StarshipTag, VehicleTag } from './resources';

export type ResourcesType = FilmTag | PeopleTag | SpecieTag | PlanetTag | StarshipTag | VehicleTag;
const resources = ['films', 'people', 'species', 'planets', 'starships', 'vehicles'];

export type ResourceData = IFilm | IPeople | ISpecie | IPlanet;

export function isResource(resource: string): resource is ResourcesType {
  return resources.indexOf(resource) !== -1;
}
