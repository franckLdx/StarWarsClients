import { GraphQLClient } from 'graphql-request';
import { IVehicle } from 'src/model/Vehicle';
import { IFetcher } from '.';
import { Mapper } from './FetchResource';
import { movieRessourceFragment } from './Tools';

const fragment = `
  {id,name,model,vehicle_class,manufacturer,length,cost_in_credits,crew,
    ${movieRessourceFragment}
}`;

const queryVehicles = () => `{ vehicles ${fragment} }`;
const queryVehicle = (id: string) => `{ vehicleById(id:"${id}") ${fragment} }`;

const vehicleMapper: Mapper<IVehicle> = (item: any) => ({
  class: item.vehicle_class,
  cost: item.cost_in_credits,
  crew: item.crew,
  id: item.id,
  length: item.length,
  manufacturer: item.manufacturer,
  model: item.model,
  movies: item.films,
  name: item.name,
  passengers: item.passengers,
});

export function getVehiclesFetcher(graphQLClient: GraphQLClient): IFetcher<IVehicle> {
  return {
    async fetchResource(id: string) {
      const payload = await graphQLClient.request<any>(queryVehicle(id));
      return payload ? vehicleMapper(payload.vehicleById) : undefined;
    },
    async fetchResources() {
      const payload = await graphQLClient.request<any>(queryVehicles());
      return payload.vehicles.map(vehicleMapper);
    }
  };
}