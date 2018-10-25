import { IMovie } from 'src/model/Movie';
import { createFetcher, Mapper } from './fetchResource';
import { urlToId } from './tools';

const toMovie: Mapper<IMovie> = (item: any): IMovie => ({
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

export const MovieFetcher = createFetcher('films', toMovie);