
const URL = 'https://swapi.co/api/';

type Resources = 'films' | 'people';

export type Mapper<T> = (raw: any) => T;

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

  return {
    fetchResource: async (id: string): Promise<T> => {
      const rawResource = await fetcher(`${urlResource}${id}/`);
      return mapper(rawResource);
    },
    fetchResources: async (): Promise<T[]> => {
      const rawResources = await fetcher(urlResource);
      return rawResources.results.map((result: any) => mapper(result));
    },
  }
};
