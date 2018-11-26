import { GraphQLClient } from 'graphql-request';

const URL = 'https://swapi.co/api/';

type Resources = 'films' | 'people' | 'species';

export type Mapper<T> = (raw: any) => T;

export function getGraphQLClient(url: string): GraphQLClient {
  const endpoint = `${url}/API`;
  return new GraphQLClient(endpoint);
}

export interface IFetcher<T> {
  fetchResource: (id: string) => Promise<T>
  fetchResources: () => Promise<T[]>
}

export const createFetcher = <T>(resource: Resources, mapper: Mapper<T>): IFetcher<T> => {
  const urlResource = `${URL}${resource}/`;

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return await response.json();
  };

  const fetchAllPages = async (pageUrl: string): Promise<T[]> => {
    if (!pageUrl) {
      return [];
    }
    const page = await fetcher(pageUrl);
    const nextPageContentPromise = fetchAllPages(page.next);
    const currentPageContent: T[] = page.results.map((result: any) => mapper(result));
    return await nextPageContentPromise.then(nextPageContent => currentPageContent.concat(nextPageContent))
  };

  return {
    fetchResource: async (id: string): Promise<T> => {
      const rawResource = await fetcher(`${urlResource}${id}/`);
      return mapper(rawResource);
    },
    fetchResources: async (): Promise<T[]> => {
      return await fetchAllPages(urlResource);
    },
  }
};


