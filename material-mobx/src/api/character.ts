import { ICharacter } from 'src/model/Character';
import { createFetcher, Mapper } from "./FetchResource";
import { urlToId } from './Tools';

const toCharacter: Mapper<ICharacter> = (item: any): ICharacter => ({
  birthYear: item.birth_year,
  eyeColor: item.eye_color,
  gender: item.gender,
  hairColor: item.hair_color,
  height: item.height,
  homeworld: urlToId(item.homeworld),
  id: urlToId(item.url),
  mass: item.mass,
  movies: item.films.map(urlToId),
  name: item.name,
  skinColor: item.skin_color,
  species: item.species.map(urlToId),
  starships: item.starships.map(urlToId),
  vehicles: item.vehicles.map(urlToId),
});

export const CaracterFetcher = createFetcher('people', toCharacter);