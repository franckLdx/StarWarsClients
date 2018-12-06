import { IResourceRef } from 'src/model';

export const urlToId = (url: string) => {
  const splited = url.split('/');
  return splited[splited.length - 2];
};

export function mapToRef<T extends { id: string, name: string }>(resource: T): IResourceRef {
  return {
    id: resource.id,
    label: resource.name,
  }
};

const resourceFieldFragment = '{id,name}';
export const movieRessourceFragment = 'films{id, name: title}';
export const characterResourceFragment = `characters${resourceFieldFragment}`;
export const planetsResourceFragment = `planets${resourceFieldFragment}`;
export const specieResourceFragment = `species${resourceFieldFragment}`;
export const starshipResourceFragment = `starships${resourceFieldFragment}`;
export const vehiclesResourceFragment = `vehicles${resourceFieldFragment}`;