import { GraphQLClient } from 'graphql-request';
import { IResourceRef } from 'src/model';
import { ICharacter } from 'src/model/Character';
import { IFetcher, Mapper } from './FetchResource';

const fragment = `
{
  id, name, skin_color, birth_year, eye_color, gender, hair_color, height, mass,
  homeworld {id, name},
  films {id, title},
  species {id, name},
  starships {id, name},
  vehicles {id, name},
}`;

const queryCharacters = () => `{ characters ${fragment} }`;
const queryCHaracter = (id: string) => `{ charactersById(id:"${id}") ${fragment} }`;

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

export function getCharacterFetcher(graphQLClient: GraphQLClient): IFetcher<ICharacter> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(queryCHaracter(id));
      return payload ? characterMapper(payload.charactersById) : undefined;
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(queryCharacters());
      return payload.characters.map(characterMapper);
    }
  };
}

export function mapCharacterToRef(character: ICharacter): IResourceRef {
  return {
    id: character.id,
    label: character.name,
  }
};
