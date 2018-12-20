import { URL_SPECIES } from '../router';
import { createSubRouter } from '../router/subRouter';
import SpeciesList from './list';
import Specie from './specie';

export default createSubRouter({
  ListComponent: SpeciesList,
  RecordComponent: Specie,
  url: URL_SPECIES,
});