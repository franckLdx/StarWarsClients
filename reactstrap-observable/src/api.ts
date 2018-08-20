
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Resources } from './model';
import { IFilm } from './model/films';

const URL = 'https://swapi.co/api';

export const fetchResoures = (resource: Resources) => {
  const mapper = getMapper(resource);
  return ajax.getJSON(`${URL}/${resource}/`).pipe(map(mapper));
}

const getMapper = (resource: Resources) => {
  switch (resource) {
    case 'films':
      return filmsMapper;
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