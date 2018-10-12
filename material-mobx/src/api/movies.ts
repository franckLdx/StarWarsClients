const URL = 'https://swapi.co/api';

export async function doFetchMovies() {
  const response = await fetch(`${URL}/films/`);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const paylod = await response.json();
  return paylod.results;
}