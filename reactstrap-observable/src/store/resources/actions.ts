import { ResourceTagType, ResourceType } from "../../model";

export interface ILoadResource {
  type: '@@ressource/LOAD',
  resource: ResourceTagType,
  pageNumber: number,
}
export const loadResource = (resource: ResourceTagType, pageNumber: number): ILoadResource =>
  ({ type: '@@ressource/LOAD', resource, pageNumber });

export interface ILoadingResource {
  type: '@@ressource/LOADING',
  resource: ResourceTagType,
  pageNumber: number,
}
export const loadingResource = (resource: ResourceTagType, pageNumber: number): ILoadingResource =>
  ({ type: '@@ressource/LOADING', resource, pageNumber });

export interface IResourceLoaded<T extends ResourceType> {
  type: '@@ressource/LOADED',
  resource: ResourceTagType,
  pagesCount: number,
  pageNumber: number,
  content: ReadonlyArray<T>,
}
export const resourceLoaded = <T extends ResourceType>(resource: ResourceTagType, pagesCount: number, pageNumber: number, content: ReadonlyArray<T>): IResourceLoaded<T> =>
  ({ type: '@@ressource/LOADED', resource, pagesCount, pageNumber, content });

export interface ISetCurrentPage {
  type: '@@ressource/SET_PAGE',
  resource: ResourceTagType,
  pageNumber: number,
}
export const setCurrentPage = (resource: ResourceTagType, pageNumber: number): ISetCurrentPage =>
  ({ type: '@@ressource/SET_PAGE', resource, pageNumber });
