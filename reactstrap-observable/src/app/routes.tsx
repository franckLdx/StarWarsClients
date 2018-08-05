import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Films from '../films';
import People from '../people';

export const URL_FILMS = '/films';
export const URL_PEOPLE = '/people';
export const URL_SPECIES = '/species';
export const URL_PLANETS = '/planets';
export const URL_SPACESHIPS = '/spaceships';
export const URL_VEHICLES = '/Vehicles';

const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route path={URL_FILMS} component={Films} />
    <Route path='/people' component={People} />
  </Switch>
);

export default Routes;