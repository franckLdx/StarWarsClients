
export const sortById = <T extends { id: string }>(items: T[]): T[] =>
  items.sort((i1, i2) => i1.id < i2.id ? -1 : 1);

export const sortByName = <T extends { name: string }>(items: T[]): T[] =>
  items.sort((i1, i2) => i1.name < i2.name ? -1 : 1);

export interface IResourceRef {
  id: string;
  name: string;
}