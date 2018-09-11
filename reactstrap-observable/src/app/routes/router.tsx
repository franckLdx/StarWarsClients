import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  FilmsSubRouter,
  PeopleList,
  PlanetsList,
  SpeciesList,
  StarshipsList,
  VehiclesList
} from '../../components';

import { makeRenderPageComponent } from './render';

import {
  URL_FILMS,
  URL_PEOPLE,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from './routes';

export const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route path={URL_FILMS.baseUrl} children={FilmsSubRouter} />
    <Route path={URL_PEOPLE.baseUrl} render={PeopleRender} />
    <Route path={URL_SPECIES.baseUrl} render={SpeciesRender} />
    <Route path={URL_PLANETS.baseUrl} render={PlanetsRender} />
    <Route path={URL_STARSHIPS.baseUrl} render={StarshipsRender} />
    <Route path={URL_VEHICLES.baseUrl} render={VehiclesRender} />
  </Switch>
);


const PeopleRender = makeRenderPageComponent(PeopleList);
const SpeciesRender = makeRenderPageComponent(SpeciesList);
const PlanetsRender = makeRenderPageComponent(PlanetsList);
const StarshipsRender = makeRenderPageComponent(StarshipsList);
const VehiclesRender = makeRenderPageComponent(VehiclesList);