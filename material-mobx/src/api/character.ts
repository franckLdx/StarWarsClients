import { GraphQLClient } from 'graphql-request';
import { ICharacter } from 'src/model/Character';
import { IFetcher, Mapper } from './FetchResource';
import {
  getRessourceFragment,
  movieRessourceFragment,
} from './Tools';

const fragment = `
{
  id, name, skin_color, birth_year, eye_color, gender, hair_color, height, mass,
  homeworld {id, name},
  ${movieRessourceFragment},
  ${getRessourceFragment('species')},
  ${getRessourceFragment('starships')},
  ${getRessourceFragment('vehicles')}
}`;

const queryCharacters = () => `{ characters ${fragment} }`;
const queryCharacter = (id: string) => `{ characterById(id:"${id}") ${fragment} }`;

const characterMapper: Mapper<ICharacter> = (item: any): ICharacter => ({
  birthYear: item.birth_year,
  eyeColor: item.eye_color,
  gender: item.gender,
  hairColor: item.hair_color,
  height: item.height,
  homeworld: item.homeworld,
  id: `${item.id}`,
  mass: item.mass,
  movies: item.films,
  name: item.name,
  skinColor: item.skin_color,
  species: item.species,
  starships: item.starships,
  vehicles: item.vehicles,
});

export function getCharactersFetcher(graphQLClient: GraphQLClient): IFetcher<ICharacter> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(queryCharacter(id));
      return payload ? characterMapper(payload.characterById) : undefined;
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(queryCharacters());
      return payload.characters.map(characterMapper);
    }
  };
}