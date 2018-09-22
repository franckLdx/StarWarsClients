import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';
import {
  FilmsRouter,
  PeopleRouter,
  PlanetsRouter,
  SpeciesRouter,
  StarshipsRouter,
  VehiclesRouter,
} from '../components/resources';
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
      <Route path={ROUTE_FILMS} render={FilmsRouter} />
      <Route path={ROUTE_PEOPLE} render={PeopleRouter} />
      <Route path={ROUTE_SPECIES} render={SpeciesRouter} />
      <Route path={ROUTE_PLANETS} render={PlanetsRouter} />
      <Route path={ROUTE_STARSHIPS} render={StarshipsRouter} />
      <Route path={ROUTE_VEHICLES} render={VehiclesRouter} />
    </Switch>
  );
}