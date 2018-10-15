import { IMovie } from 'src/model/Movie';
import { fetchResource } from './fetchResource';

export async function fetchMovies(): Promise<IMovie[]> {
  const response = await fetchResource('films');
  return response.map((item: any): IMovie => ({
    characters: item.characters,
    director: item.director,
    episodeId: item.episode_id,
    id: item.url,
    openingCrawl: item.opening_crawl,
    planets: item.planets,
    producer: item.producer.split(','),
    releaseDate: item.release_date,
    species: item.species,
    starships: item.starships,
    title: item.title,
    vehicles: item.vehicles,
  }));
}