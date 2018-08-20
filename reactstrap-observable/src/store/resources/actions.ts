import { Resources } from "../../model";
import { IFilm } from "../../model/films";

export type AppActions = ILoadResource | ILoadingResource | IResourceLoaded<IFilm>;

export interface ILoadResource {
  type: '@@ressource/LOAD',
  resource: Resources
}
export const loadResource = (resource: Resources): ILoadResource => ({ type: '@@ressource/LOAD', resource });

export interface ILoadingResource {
  type: '@@ressource/LOADING';
  resource: Resources;
}
export const loadingResource = (resource: Resources) => ({ type: '@@ressource/LOADING', resource });

export interface IResourceLoaded<T> {
  type: '@@ressource/LOADED';
  resource: Resources;
  content: T;
}
export const resourceLoaded = <T>(resource: Resources, content: T): IResourceLoaded<T> => ({ type: '@@ressource/LOADED', resource, content });