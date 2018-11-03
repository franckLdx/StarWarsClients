
export const sortByName = <T extends { name: string }>(items: T[]): T[] =>
  items.sort((i1, i2) => i1.name < i2.name ? -1 : 1);
