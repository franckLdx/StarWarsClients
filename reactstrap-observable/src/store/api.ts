
import { ajax } from 'rxjs/ajax';

const URL = 'https://swapi.co/api';

export const fetchResoures = (resource: string) => {
  // tslint:disable-next-line:no-console
  console.log(`${URL}/${resource}`);
  return ajax.getJSON(`${URL}/${resource}/`);
}