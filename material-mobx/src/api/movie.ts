import { GraphQLClient } from 'graphql-request'
import { IMovie, IResourceRef, resoureRefLabelCmp } from 'src/model';
import { mapCharacterToRef } from '.';
import { IFetcher, Mapper } from './FetchResource';
import { mapPlanetToRef } from './Planet';
import { mapSpecieToRef } from './Specie';
import { mapStarshipToRef } from './Starship';
import {
  characterResourceFragment,
  planetsResourceFragment,
  specieResourceFragment,
  starshipResourceFragment,
  vehiclesResourceFragment
} from './Tools';
import { mapVehicleToRef } from './Vehicle';

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
  characters: item.characters.map(mapCharacterToRef).sort(resoureRefLabelCmp),
  director: item.director,
  id: `${item.id}`,
  name: item.title,
  openingCrawl: item.opening_crawl,
  planets: item.planets.map(mapPlanetToRef),
  producers: item.producers,
  releaseDate: item.release_date,
  species: item.species.map(mapSpecieToRef),
  starships: item.starships.map(mapStarshipToRef),
  vehicles: item.vehicles.map(mapVehicleToRef),
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

export function mapMovieToRef(movie: IMovie): IResourceRef {
  return {
    id: movie.id,
    label: movie.name,
  }
};