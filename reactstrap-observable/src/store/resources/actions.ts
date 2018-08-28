import { ResourcesType } from "../../model";

export interface ILoadResource {
  type: '@@ressource/LOAD',
  resource: ResourcesType,
  pageNumber: number,
}
export const loadResource = (resource: ResourcesType, pageNumber: number): ILoadResource =>
  ({ type: '@@ressource/LOAD', resource, pageNumber });

export interface ILoadingResource {
  type: '@@ressource/LOADING',
  resource: ResourcesType,
  pageNumber: number,
}
export const loadingResource = (resource: ResourcesType, pageNumber: number): ILoadingResource =>
  ({ type: '@@ressource/LOADING', resource, pageNumber });

export interface IResourceLoaded<T> {
  type: '@@ressource/LOADED',
  resource: ResourcesType,
  pageNumber: number,
  content: T,
}
export const resourceLoaded = <T>(resource: ResourcesType, pageNumber: number, content: T): IResourceLoaded<T> =>
  ({ type: '@@ressource/LOADED', resource, pageNumber, content });