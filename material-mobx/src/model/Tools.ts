import { IResourceType } from 'src/store/Store';

export const cmpField = <T, K extends keyof T>(field: K) =>
  (item1: T, item2: T) => cmp(item1[field], item2[field]);

export const cmp = <T>(s1: T, s2: T) => {
  if (s1 < s2) { return -1; }
  if (s1 > s2) { return 1; }
  return 0;
}

export const cmpResourceName = cmpField<IResourceType, keyof IResourceType>('name');