import { GraphQLClient } from 'graphql-request';
import { IPlanet } from 'src/model/Planet';
import { IFetcher, Mapper } from './FetchResource';
import {
  getRessourceFragment,
  movieRessourceFragment
} from './Tools';

const fragment = `
{
  id,name,diameter,rotation_period,orbital_period,gravity,population,climate,terrain,surface_water
  ${getRessourceFragment('residents')}
  ${movieRessourceFragment}
}`;

const querySpecies = () => `{ planets ${fragment} }`;
const querySpecie = (id: string) => `{ planetById(id:"${id}") ${fragment} }`;

const planetMapper: Mapper<IPlanet> = (item: any): IPlanet => {
  return {
    climate: item.climate,
    diameter: item.diameter,
    gravity: item.gravity,
    id: `${item.id}`,
    movies: item.films,
    name: item.name,
    orbitalPeriod: item.orbitalPeriod,
    population: item.population,
    residents: item.residents,
    rotationPeriod: item.rotationPeriod,
    surfaceWater: item.surface_water,
    terrain: item.terrain,
  };
};

export function getPlanetsFetcher(graphQLClient: GraphQLClient): IFetcher<IPlanet> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(querySpecie(id));
      return payload ? planetMapper(payload.planetById) : undefined;
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(querySpecies());
      return payload.planets.map(planetMapper);
    }
  };
}