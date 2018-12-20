import { URL_PLANETS } from '../router';
import { createSubRouter } from '../router/subRouter';
import PlanetsList from './list';
import Planet from './planet';

export default createSubRouter({
  ListComponent: PlanetsList,
  RecordComponent: Planet,
  url: URL_PLANETS,
});