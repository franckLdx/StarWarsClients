
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { ResourcesType } from './model';
import { IFilm } from './model/films';
import { IPeople } from './model/people';

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