
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { IFilm, IPeople, IPlanets, ISpecies, ResourcesType } from './model';

const URL = 'https://swapi.co/api';

export const fetchResoures = (resource: ResourcesType) => {
  const mapper = getMapper(resource);
  return ajax.getJSON(`${URL}/${resource}/`).pipe(map(mapper));
}

const getMapper = (resource: ResourcesType) => {
  switch (resource) {
    case 'films':
      return filmsMapper;
    case 'people':
      return peopleMapper;
    case 'species':
      return speciesMapper;
    case 'planets':
      return planetsMapper;
    default:
      return (payload: any) => ({ ...payload });
  }
};

const filmsMapper = (payload: any): IFilm[] => {
  const mapper = (film: any) => ({
    director: film.director,
    episodeId: film.episode_id,
    openingCrawl: film.opening_crawl,
    producer: film.producer,
    releaseDate: film.release_date,
    title: film.title,
  });
  return payload.results.map(mapper);
};

const peopleMapper = (payload: any): IPeople[] => {
  const mapper = (people: any) => ({
    birthYear: people.birth_year,
    eyeColor: people.eye_color,
    gender: people.gender,
    hairColor: people.hair_color,
    height: people.height,
    mass: people.mass,
    name: people.name,
    skinColor: people.skin_color,
  });
  return payload.results.map(mapper);
};

const speciesMapper = (payload: any): ISpecies[] => {
  const mapper = (specie: any) => ({
    averageHeight: specie.average_height,
    averageLifespan: specie.average_lifespan,
    classification: specie.classification,
    created: specie.created,
    designation: specie.designation,
    edited: specie.edited,
    eyeColors: specie.eye_colors,
    hairColors: specie.hair_colors,
    language: specie.language,
    name: specie.name,
  });
  return payload.results.map(mapper);
};

const planetsMapper = (payload: any): IPlanets[] => {
  const mapper = (specie: any) => ({
    climate: specie.climate,
    diameter: specie.diameter,
    gravity: specie.gravity,
    name: specie.name,
    orbitalPeriod: specie.orbital_period,
    population: specie.population,
    rotationPeriod: specie.rotation_period,
    surfaceWater: specie.surface_water,
    terrain: specie.terrain,
  });
  return payload.results.map(mapper);
};
