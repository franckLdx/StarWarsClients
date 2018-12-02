import { GraphQLClient } from 'graphql-request'
import { IMovie, resoureRefCmp } from 'src/model';
import { mapCharacterToRef } from '.';
import { IFetcher, Mapper } from './FetchResource';

const fragment = `
{
  id, title, opening_crawl, director, producers, release_date
  characters{id, name},
  species{id, name},
  planets{id, name},
  starships{id, name},
  starships{id, name},
  vehicles{id, name},
}`;

const queryFilms = () => `{ films ${fragment} }`;
const queryFilm = (id: string) => `{ filmById(id:"${id}") ${fragment} }`;


const movieMapper: Mapper<IMovie> = (item: any): IMovie => ({
  characters: item.characters.map(mapCharacterToRef).sort(resoureRefCmp),
  director: item.director,
  id: `${item.id}`,
  openingCrawl: item.opening_crawl,
  planets: item.planets,
  producers: item.producers,
  releaseDate: item.release_date,
  species: item.species,
  starships: item.starships,
  title: item.title,
  vehicles: item.vehicles,
});

export function getMovieFetcher(graphQLClient: GraphQLClient): IFetcher<IMovie> {
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