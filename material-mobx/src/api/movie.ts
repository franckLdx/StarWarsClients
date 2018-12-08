import { GraphQLClient } from 'graphql-request'
import { IMovie } from 'src/model';
import { IFetcher, Mapper } from './FetchResource';
import {
  characterResourceFragment,
  planetsResourceFragment,
  specieResourceFragment,
  starshipResourceFragment,
  vehiclesResourceFragment
} from './Tools';

const fragment = `
{
  id, title, opening_crawl, director, producers, release_date
  ${characterResourceFragment},
  ${specieResourceFragment},
  ${planetsResourceFragment},
  ${starshipResourceFragment},
  ${vehiclesResourceFragment},
}`;

const queryFilms = () => `{ films ${fragment} }`;
const queryFilm = (id: string) => `{ filmById(id:"${id}") ${fragment} }`;


const movieMapper: Mapper<IMovie> = (item: any): IMovie => ({
  characters: item.characters,
  director: item.director,
  id: `${item.id}`,
  name: item.title,
  openingCrawl: item.opening_crawl,
  planets: item.planets,
  producers: item.producers,
  releaseDate: item.release_date,
  species: item.species,
  starships: item.starships,
  vehicles: item.vehicles,
});

export function getMoviesFetcher(graphQLClient: GraphQLClient): IFetcher<IMovie> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(queryFilm(id));
      return movieMapper(payload.filmById);
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(queryFilms());
      return payload.films.map(movieMapper);
    }
  };
}