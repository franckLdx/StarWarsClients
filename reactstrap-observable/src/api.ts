
import { ajax } from 'rxjs/ajax';

const URL = 'https://swapi.co/api';

export const fetchResoures = (resource: string) => ajax.getJSON(`${URL}/${resource}/`);
