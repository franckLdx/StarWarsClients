import { IResourceRef } from 'src/model';
import { ISpecie } from "src/model/Specie";
import { createFetcher, Mapper } from './FetchResource';
import { urlToId } from './Tools';

const toSpecie: Mapper<ISpecie> = (item: any): ISpecie => {
  return {
    averageHeight: item.average_height,
    averageLifespan: item.average_lifespan,
    characters: item.people.map(urlToId),
    classification: item.classification,
    designation: item.designation,
    eyeColors: item.eye_colors.split(','),
    hairColors: item.hair_colors,
    homeworld: item.homeworld ? urlToId(item.homeworld) : null,
    id: urlToId(item.url),
    language: item.language,
    movies: item.films.map(urlToId),
    name: item.name,
    skinColors: item.skin_colors.split(','),
  }
};

export const SpeciesFetcher = createFetcher('species', toSpecie);

export function mapSpecieToRef(specie: ISpecie): IResourceRef {
  return {
    id: specie.id,
    label: specie.name,
  }
};