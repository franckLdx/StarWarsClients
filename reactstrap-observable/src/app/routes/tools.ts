import { isResource, ResourceTagType } from "../../model";

export interface IRessourceUrl {
  baseUrl: string,
  list: string,
  record: string,
}
export const mapResourceToUrls = (resource: ResourceTagType): IRessourceUrl => {
  const baseUrl = `/${resource}`;
  return {
    baseUrl,
    list: `${baseUrl}/list`,
    record: `${baseUrl}/record`,
  };
}

export const mapPageToHash = (pageNumber: number) => `#page=${pageNumber}`;

export const mapHashToPageNumber = (hash: string | undefined): number | undefined => {
  if (!hash) {
    return undefined;
  }
  const pageNumber = parseInt(hash.slice(6), 10);
  if (pageNumber) {
    return pageNumber;
  }
  throw new Error(`Unvalid hash: ${hash}`);
}

export const mapUrlToResource = (url: string): ResourceTagType => {
  const resource = url.split('/')[1];
  if (resource && isResource(resource)) {
    return resource;
  }
  throw new Error(`Unvalid URL: ${url}`);
};
