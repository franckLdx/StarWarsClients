import { IFilm, IPeople, IPlanet, ISpecie, IStarship, IVehicle, ResourcesType } from "../../model";
import { IAppState } from "../state";

export const getResource = (state: IAppState, resource: ResourcesType) => state[resource]

export const getResourcePage = (state: IAppState, resource: ResourcesType, pageNumber: number) => state[resource][pageNumber];
export const getResourcePageStatus = (state: IAppState, resource: ResourcesType, pageNumber: number) => getResourcePage(state, resource, pageNumber).status;
const getResourcePageContent = <T>(state: IAppState, resource: ResourcesType, pageNumber: number): T[] => {
  return getResourcePage(state, resource, pageNumber).content as any as T[];
}
export const canLoadResourcePage = (state: IAppState, resource: ResourcesType, pageNumber: number) => getResourcePageStatus(state, resource, 0) === 'NOT_LOADED'

export const getFilmsPageContent = (state: IAppState, pageNumber: number): IFilm[] => getResourcePageContent<IFilm>(state, 'films', pageNumber);
export const getPeoplePageContent = (state: IAppState, pageNumber: number): IPeople[] => getResourcePageContent<IPeople>(state, 'people', pageNumber);
export const getPlanetsPageContent = (state: IAppState, pageNumber: number): IPlanet[] => getResourcePageContent<IPlanet>(state, 'planets', pageNumber);
export const getSpeciesPageContent = (state: IAppState, pageNumber: number): ISpecie[] => getResourcePageContent<ISpecie>(state, 'species', pageNumber);
export const getStarshipsPageContent = (state: IAppState, pageNumber: number): IStarship[] => getResourcePageContent<IStarship>(state, 'starships', pageNumber);
export const getVehiclessPageContent = (state: IAppState, pageNumber: number): IVehicle[] => getResourcePageContent<IVehicle>(state, 'vehicles', pageNumber);
