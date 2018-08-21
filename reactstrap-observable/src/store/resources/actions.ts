import { ResourcesType } from "../../model";
import { IFilm } from "../../model/films";

export type AppActions = ILoadResource | ILoadingResource | IResourceLoaded<IFilm>;

export interface ILoadResource {
  type: '@@ressource/LOAD',
  resource: ResourcesType
}
export const loadResource = (resource: ResourcesType): ILoadResource => ({ type: '@@ressource/LOAD', resource });

export interface ILoadingResource {
  type: '@@ressource/LOADING';
  resource: ResourcesType;
}
export const loadingResource = (resource: ResourcesType) => ({ type: '@@ressource/LOADING', resource });

export interface IResourceLoaded<T> {
  type: '@@ressource/LOADED';
  resource: ResourcesType;
  content: T;
}
export const resourceLoaded = <T>(resource: ResourcesType, content: T): IResourceLoaded<T> => ({ type: '@@ressource/LOADED', resource, content });