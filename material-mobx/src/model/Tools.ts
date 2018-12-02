
export const sortById = <T extends { id: string }>(items: T[]): T[] =>
  items.sort((i1, i2) => i1.id < i2.id ? -1 : 1);

export const sortByName = <T extends { name: string }>(items: T[]): T[] =>
  items.sort((i1, i2) => i1.name < i2.name ? -1 : 1);

export const resoureRefLabelCmp = (resource1: IResourceRef, resource2: IResourceRef) =>
  resource1.label < resource2.label ? -1 : 1;

export const resoureRefLabelId = (resource1: IResourceRef, resource2: IResourceRef) =>
  resource1.id < resource2.id ? -1 : 1;

export interface IResourceRef {
  id: string;
  label: string;
}
