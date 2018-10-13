
const URL = 'https://swapi.co/api/';

export type Resources = 'films';

export async function fetchResource(resource: Resources) {
  const response = await fetch(`${URL}${resource}/`);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const paylod = await response.json();
  return paylod.results;
}