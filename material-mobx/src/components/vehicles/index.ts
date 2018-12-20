import { URL_VEHICLES } from '../router';
import { createSubRouter } from '../router/subRouter';
import VehiclesList from './list';
import Vehicle from './vehicle';

export default createSubRouter({
  ListComponent: VehiclesList,
  RecordComponent: Vehicle,
  url: URL_VEHICLES,
});