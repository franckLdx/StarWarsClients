import { FilmTag, IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, PeopleTag, PlanetTag, SpecieTag, StarshipTag, VehicleTag } from './resources';

export type ResourceTagType = FilmTag | PeopleTag | SpecieTag | PlanetTag | StarshipTag | VehicleTag;
const resources = ['films', 'people', 'species', 'planets', 'starships', 'vehicles'];

export type ResourceType = IFilm | IPeople | ISpecie | IPlanet | IStarship | IVehicle;

export function isResource(resource: string): resource is ResourceTagType {
  return resources.indexOf(resource) !== -1;
}
