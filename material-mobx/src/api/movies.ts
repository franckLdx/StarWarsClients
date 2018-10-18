import { IMovie } from 'src/model/Movie';
import { fetchResource, fetchResources } from './fetchResource';
import { urlToId } from './tools';

export async function fetchMovies(): Promise<IMovie[]> {
  const response = await fetchResources('films');
  return response.map(itemToMovie);
}

export async function fetchMovie(id: string): Promise<IMovie> {
  const response = await fetchResource('films', id);
  return itemToMovie(response);
}

const itemToMovie = (item: any): IMovie => ({
  characters: item.characters,
  director: item.director,
  episodeId: item.episode_id,
  id: urlToId(item.url),
  openingCrawl: item.opening_crawl,
  planets: item.planets,
  producer: item.producer.split(','),
  releaseDate: item.release_date,
  species: item.species,
  starships: item.starships,
  title: item.title,
  vehicles: item.vehicles,
});