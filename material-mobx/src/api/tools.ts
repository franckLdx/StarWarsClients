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