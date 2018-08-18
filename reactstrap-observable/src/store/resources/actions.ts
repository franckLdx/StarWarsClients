import { Resources } from "../../resources";

export type AppActions = ILoadResource | ILoadingResource | IResourceLoaded;

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

export interface IResourceLoaded {
  type: '@@ressource/LOADED';
  resource: Resources;
  content: any;
}
export const resourceLoaded = (resource: Resources, content: any): IResourceLoaded => ({ type: '@@ressource/LOADED', resource, content });