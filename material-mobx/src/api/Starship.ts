import { GraphQLClient } from 'graphql-request';
import { IStarship } from 'src/model/Starship';
import { IFetcher } from '.';
import { Mapper } from './FetchResource';
import { movieRessourceFragment } from './Tools';

const fragment = `
{id,name,model,starship_class,manufacturer,cost_in_credits,length,crew,passengers,max_atmosphering_speed,hyperdrive_rating,MGLT,cargo_capacity,consumables,
    ${movieRessourceFragment}
}`;

const queryStarships = () => `{ starships ${fragment} }`;
const queryStarship = (id: string) => `{ starshipById(id:"${id}") ${fragment} }`;

const starshipMapper: Mapper<IStarship> = (item: any) => ({
  cargoCapacity: item.cargo_capacity,
  class: item.starship_class,
  consumables: item.consumables,
  cost: item.cost_in_credits,
  crew: item.crew,
  hyperdriveRating: item.hyperdrive_rating,
  id: item.id,
  length: item.length,
  manufacturer: item.manufacturer,
  maxAtmospheringSpeed: item.max_atmosphering_speed,
  mlgt: item.MGLT,
  model: item.model,
  movies: item.films,
  name: item.name,
  passengers: item.passengers,
});

export function getStarshipsFetcher(graphQLClient: GraphQLClient): IFetcher<IStarship> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(queryStarship(id));
      return payload ? starshipMapper(payload.starshipById) : undefined;
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(queryStarships());
      return payload.starships.map(starshipMapper);
    }
  };
}