import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';

import {
  FilmsRenderer,
  PeopleRenderer,
  PlanetsRenderer,
  SpeciesRouter,
  StarshipsRenderer,
  VehiclesRenderer,
} from '../components/routes/resources';

import {
  ROUTE_FILMS,
  ROUTE_PEOPLE,
  ROUTE_PLANETS,
  ROUTE_SPECIES,
  ROUTE_STARSHIPS,
  ROUTE_VEHICLES
} from '../model/routes';

export const Router: React.StatelessComponent<{}> = () => {
  return (
    <Switch>
      <Route path={ROUTE_FILMS} render={FilmsRenderer} />
      <Route path={ROUTE_PEOPLE} render={PeopleRenderer} />
      <Route path={ROUTE_SPECIES} render={SpeciesRouter} />
      <Route path={ROUTE_PLANETS} render={PlanetsRenderer} />
      <Route path={ROUTE_STARSHIPS} render={StarshipsRenderer} />
      <Route path={ROUTE_VEHICLES} render={VehiclesRenderer} />
    </Switch>
  );
}