export const urlToId = (url: string) => {
  const splited = url.split('/');
  return splited[splited.length - 2];
};

const resourceFieldFragment = '{id,name}';
export const movieRessourceFragment = 'films{id, name: title}';

type ResourceName =
  'characters' | 'residents' |
  'planets' | 'homeworld' |
  'species' |
  'starships' |
  'vehicles';
export const getRessourceFragment = (resourceName: ResourceName) => `${resourceName}${resourceFieldFragment}`;
