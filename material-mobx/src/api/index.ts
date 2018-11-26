import { getGraphQLClient } from './FetchResource';
import { getMovieFetcher } from './Movie';

export * from './Character';
export * from './Specie';

const url = 'http://localhost:8000';
const graphQLClient = getGraphQLClient(url);

export { IFetcher } from './FetchResource';
export const movieFetcher = getMovieFetcher(graphQLClient)
