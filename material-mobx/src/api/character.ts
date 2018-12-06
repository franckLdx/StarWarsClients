import { GraphQLClient } from 'graphql-request';
import { IResourceRef, resoureRefLabelId } from 'src/model';
import { ICharacter } from 'src/model/Character';
import { mapSpecieToRef } from '.';
import { IFetcher, Mapper } from './FetchResource';
import { mapMovieToRef } from './Movie';
import { mapPlanetToRef } from './Planet';
import { mapStarshipToRef } from './Starship';
import {
  mapToRef,
  movieRessourceFragment,
  specieResourceFragment,
  starshipResourceFragment,
  vehiclesResourceFragment
} from './Tools';
import { mapVehicleToRef } from './Vehicle';

const fragment = `
{
  id, name, skin_color, birth_year, eye_color, gender, hair_color, height, mass,
  homeworld {id, name},
  ${movieRessourceFragment},
  ${specieResourceFragment},
  ${starshipResourceFragment},
  ${vehiclesResourceFragment},
}`;

const queryCharacters = () => `{ characters ${fragment} }`;
const queryCHaracter = (id: string) => `{ charactersById(id:"${id}") ${fragment} }`;

const characterMapper: Mapper<ICharacter> = (item: any): ICharacter => ({
  birthYear: item.birth_year,
  eyeColor: item.eye_color,
  gender: item.gender,
  hairColor: item.hair_color,
  height: item.height,
  homeworld: mapPlanetToRef(item.homeworld),
  id: `${item.id}`,
  mass: item.mass,
  movies: item.films.map(mapMovieToRef).sort(resoureRefLabelId),
  name: item.name,
  skinColor: item.skin_color,
  species: item.species.map(mapSpecieToRef),
  starships: item.starships.map(mapStarshipToRef),
  vehicles: item.vehicles.map(mapVehicleToRef),
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

export const mapCharacterToRef: (c: ICharacter) => IResourceRef = mapToRef;
