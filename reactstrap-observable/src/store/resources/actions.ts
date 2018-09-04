import { ResourceType } from "../../model";

export interface ILoadResource {
  type: '@@ressource/LOAD',
  resource: ResourceType,
  pageNumber: number,
}
export const loadResource = (resource: ResourceType, pageNumber: number): ILoadResource =>
  ({ type: '@@ressource/LOAD', resource, pageNumber });

export interface ILoadingResource {
  type: '@@ressource/LOADING',
  resource: ResourceType,
  pageNumber: number,
}
export const loadingResource = (resource: ResourceType, pageNumber: number): ILoadingResource =>
  ({ type: '@@ressource/LOADING', resource, pageNumber });

export interface IResourceLoaded<T> {
  type: '@@ressource/LOADED',
  resource: ResourceType,
  pagesCount: number,
  pageNumber: number,
  content: T,
}
export const resourceLoaded = <T>(resource: ResourceType, pagesCount: number, pageNumber: number, content: T): IResourceLoaded<T> =>
  ({ type: '@@ressource/LOADED', resource, pagesCount, pageNumber, content });