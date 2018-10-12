import * as React from 'react';

import { Route, Switch } from 'react-router';

export const URL_MOVIES = '/movies';
export const URL_CHARACTERS = '/characters';
export const URL_PLANETS = '/planets';
export const URL_STARSHIPS = '/starships';
export const URL_SPECIES = '/species';
export const URL_VEHICLES = '/vehicles'

import Movies from './movies';
import { movieStore } from './state';
import { Movie } from './state/movies/Movie';

export const Router: React.SFC<{}> = () => (
  <Switch>
    <Route path={URL_MOVIES} render={Movies} />
    <Route path={URL_CHARACTERS} render={Characters} />
    <Route path={URL_PLANETS} />
    <Route path={URL_STARSHIPS} />
    <Route path={URL_SPECIES} />
    <Route path={URL_VEHICLES} />
  </Switch>
);

const Characters = () => {
  setInterval(
    () => movieStore.addMovie(new Movie('id', 'foo')),
    10
  );
  return 'Characters ' + movieStore.report;
}
