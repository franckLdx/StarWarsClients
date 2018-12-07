export const urlToId = (url: string) => {
  const splited = url.split('/');
  return splited[splited.length - 2];
};

const resourceFieldFragment = '{id,name}';
export const movieRessourceFragment = 'films{id, name: title}';
export const characterResourceFragment = `characters${resourceFieldFragment}`;
export const planetsResourceFragment = `planets${resourceFieldFragment}`;
export const specieResourceFragment = `species${resourceFieldFragment}`;
export const starshipResourceFragment = `starships${resourceFieldFragment}`;
export const vehiclesResourceFragment = `vehicles${resourceFieldFragment}`;