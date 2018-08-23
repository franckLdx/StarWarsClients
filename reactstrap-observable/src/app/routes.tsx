import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FilmList } from '../components/filmList';
import { PeopleList } from '../components/peopleList';
import { mapResourceToUrl } from '../model';

export const URL_FILMS = mapResourceToUrl('films');
export const URL_PEOPLE = mapResourceToUrl('people');
export const URL_SPECIES = mapResourceToUrl('species');
export const URL_PLANETS = mapResourceToUrl('planets');
export const URL_STARSHIPS = mapResourceToUrl('starships');
export const URL_VEHICLES = mapResourceToUrl('vehicles');

const Routes: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route path={URL_FILMS} component={FilmList} />
    <Route path={URL_PEOPLE} component={PeopleList} />
    <Route path={URL_SPECIES} />
    <Route path={URL_PLANETS} />
    <Route path={URL_STARSHIPS} />
    <Route path={URL_VEHICLES} />
  </Switch>
);

export default Routes;