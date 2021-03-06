import { GraphQLClient } from 'graphql-request';
import { ISpecie } from "src/model/Specie";
import { IFetcher, Mapper } from './FetchResource';
import {
  getRessourceFragment,
  movieRessourceFragment
} from './Tools';

const fragment = `
{
  id,name,classification,designation,average_height,average_lifespan,eye_colors,hair_colors,skin_colors,language,
  ${getRessourceFragment('homeworld')},
  ${getRessourceFragment('characters')},
  ${movieRessourceFragment}
}`;

const querySpecies = () => `{ species ${fragment} }`;
const querySpecie = (id: string) => `{ specieById(id:"${id}") ${fragment} }`;

const specieMapper: Mapper<ISpecie> = (item: any) => {
  return {
    averageHeight: item.average_height,
    averageLifespan: item.average_lifespan,
    characters: item.characters,
    classification: item.classification,
    designation: item.designation,
    eyeColors: item.eye_colors,
    hairColors: item.hair_colors,
    homeworld: item.homeworld,
    id: `${item.id}`,
    language: item.language,
    movies: item.films,
    name: item.name,
    skinColors: item.skin_colors,
  }
};

export function getSpeciesFetcher(graphQLClient: GraphQLClient): IFetcher<ISpecie> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(querySpecie(id));
      return payload ? specieMapper(payload.specieById) : undefined;
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(querySpecies());
      return payload.species.map(specieMapper);
    }
  };
}