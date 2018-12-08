import { getCharactersFetcher } from './Character';
import { getGraphQLClient } from './FetchResource';
import { getMoviesFetcher } from './Movie';
import { getSpeciesFetcher } from './Specie';

export * from './Character';
export * from './Specie';

const url = 'http://localhost:8000';
const graphQLClient = getGraphQLClient(url);

export { IFetcher } from './FetchResource';
export const moviesFetcher = getMoviesFetcher(graphQLClient)
export const charactersFetcher = getCharactersFetcher(graphQLClient)
export const speciesFetcher = getSpeciesFetcher(graphQLClient)
