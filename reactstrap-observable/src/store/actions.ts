import { Resources } from "../resources";

export type AppActions = ILoadResource | IResourceLoaded | ILoadingResource;

export interface ILoadResource {
  type: 'LOAD_RESOURCE';
  resource: Resources;
}
export const loadResource = (resource: Resources): ILoadResource => ({ type: 'LOAD_RESOURCE', resource });

export interface ILoadingResource {
  type: 'LOADING_RESOURCE';
  resource: Resources;
}
export const loadingResource = (resource: Resources): ILoadingResource => ({ type: 'LOADING_RESOURCE', resource });

export interface IResourceLoaded {
  type: 'RESOURCE_LOADED';
  resource: Resources;
  content: any;
}
export const resourceLoaded = (resource: Resources, content: any): IResourceLoaded => ({ type: 'RESOURCE_LOADED', resource, content });