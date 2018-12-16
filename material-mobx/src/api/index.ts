import { getCharactersFetcher } from './Character';
import { getGraphQLClient } from './FetchResource';
import { getMoviesFetcher } from './Movie';
import { getPlanetsFetcher } from './Planet';
import { getSpeciesFetcher } from './Specie';
import { getStarshipsFetcher } from './Starship';

export * from './Character';
export * from './Specie';

const url = 'http://localhost:8000';
const graphQLClient = getGraphQLClient(url);

export { IFetcher } from './FetchResource';
export const moviesFetcher = getMoviesFetcher(graphQLClient);
export const charactersFetcher = getCharactersFetcher(graphQLClient);
export const speciesFetcher = getSpeciesFetcher(graphQLClient);
export const planetsFetcher = getPlanetsFetcher(graphQLClient);
export const starshipsFetcher = getStarshipsFetcher(graphQLClient);
