import { URL_STARSHIPS } from '../router';
import { createSubRouter } from '../router/subRouter';
import starshipsList from './list';
import Starship from './starship';

export default createSubRouter({
  ListComponent: starshipsList,
  RecordComponent: Starship,
  url: URL_STARSHIPS,
});