import { isResource, ResourceType } from "../../model";

export const mapResourceToUrl = (resource: ResourceType) => `/${resource}`;
export const mapPageToHash = (pageNumber: number) => `#page=${pageNumber}`;

export const mapUrlToResource = (url: string): ResourceType => {
  const resource = url.split('/').pop();
  if (resource && isResource(resource)) {
    return resource;
  }
  throw new Error(`Unvalid URL: ${url}`);
};

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

