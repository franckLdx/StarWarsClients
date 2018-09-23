import { RouteComponentProps } from "react-router";
import { isResource, ResourceTagType } from "../../model";

export const mapPageNumberToHash = (pageNumber: number) => `#page=${pageNumber}`;

export const mapHashToPageNumber = (hash: string): number => {
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

export type Renderer = (routeProps: RouteComponentProps<any>) => React.ReactNode;

export interface IListProps { pageNumber: number }
export interface IRecordProps { id: string }
