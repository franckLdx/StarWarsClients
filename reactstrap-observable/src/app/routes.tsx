import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Films from '../films';
import { mapResourceToUrl } from '../model';
import People from '../people';

export const URL_FILMS = mapResourceToUrl('films');
export const URL_PEOPLE = mapResourceToUrl('people');
export const URL_SPECIES = mapResourceToUrl('species');
export const URL_PLANETS = mapResourceToUrl('planets');
export const URL_SPACESHIPS = mapResourceToUrl('spaceships');
export const URL_VEHICLES = mapResourceToUrl('Vehicles');

const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route path={URL_FILMS} component={Films} />
    <Route path={URL_PEOPLE} component={People} />
    <Route path={URL_SPECIES} />
    <Route path={URL_PLANETS} />
    <Route path={URL_SPACESHIPS} />
    <Route path={URL_VEHICLES} />
  </Switch>
);

export default Routes;