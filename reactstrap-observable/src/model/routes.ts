import { ResourceTagType } from "./tools";

export const routeGetResourceUrl = (resource: ResourceTagType) => `/${resource}`;

export const routeGetListUrl = (resource: ResourceTagType) =>
  `${routeGetResourceUrl(resource)}${ROUTE_LIST}`;

export const routeGetRecordtUrl = (resource: ResourceTagType) =>
  `${routeGetResourceUrl(resource)}${ROUTE_RECORD}`;

export const ROUTE_FILMS = routeGetResourceUrl('films');
export const ROUTE_PEOPLE = routeGetResourceUrl('people');
export const ROUTE_PLANETS = routeGetResourceUrl('planets');
export const ROUTE_SPECIES = routeGetResourceUrl('species');
export const ROUTE_STARSHIPS = routeGetResourceUrl('starships');
export const ROUTE_VEHICLES = routeGetResourceUrl('vehicles');

export const ROUTE_LIST = '/list';
export const ROUTE_RECORD = '/record';