import { Movie } from 'src/model/Movie';
import { fetchResource } from './fetchResource';

export async function fetchMovies() {
  const response = await fetchResource('films');
  return response.map((item: any) => new Movie(item.url, item.title));
}