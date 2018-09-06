import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { mapHashToPageNumber, mapResourceToUrl } from './tools';

import {
  FilmList,
  PeopleList,
  PlanetsList,
  SpeciesList,
  StarshipsList,
  VehiclesList
} from '../../components';

import { defaultPageNumber } from '../../store';

export const URL_FILMS = mapResourceToUrl('films');
export const URL_PEOPLE = mapResourceToUrl('people');
export const URL_SPECIES = mapResourceToUrl('species');
export const URL_PLANETS = mapResourceToUrl('planets');
export const URL_STARSHIPS = mapResourceToUrl('starships');
export const URL_VEHICLES = mapResourceToUrl('vehicles');

export const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route path={URL_FILMS} render={FilmsRender} />
    <Route path={URL_PEOPLE} render={PeopleRender} />
    <Route path={URL_SPECIES} render={SpeciesRender} />
    <Route path={URL_PLANETS} render={PlanetsRender} />
    <Route path={URL_STARSHIPS} render={StarshipsRender} />
    <Route path={URL_VEHICLES} render={VehiclesRender} />
  </Switch>
);

interface IWithPageNumber { pageNumber: number }
const makeRenderPageComponent = (Component: React.ComponentType<IWithPageNumber>) => {
  return (params: any) => {
    const { hash } = params.location;
    const pageNumber = mapHashToPageNumber(hash) || defaultPageNumber;
    return <Component pageNumber={pageNumber} />;
  }
}

const FilmsRender = makeRenderPageComponent(FilmList);
const PeopleRender = makeRenderPageComponent(PeopleList);
const SpeciesRender = makeRenderPageComponent(SpeciesList);
const PlanetsRender = makeRenderPageComponent(PlanetsList);
const StarshipsRender = makeRenderPageComponent(StarshipsList);
const VehiclesRender = makeRenderPageComponent(VehiclesList);