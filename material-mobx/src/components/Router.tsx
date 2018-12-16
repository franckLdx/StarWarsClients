import * as React from 'react';

import { Route, Switch } from 'react-router';

export const URL_MOVIES = '/movies';
export const URL_CHARACTERS = '/characters';
export const URL_PLANETS = '/planets';
export const URL_STARSHIPS = '/starships';
export const URL_SPECIES = '/species';
export const URL_VEHICLES = '/vehicles'

import Characters from './characters';
import Movies from './movies';
import Planets from './planets';
import Species from './species';
import Starships from './starships';

export const Router: React.SFC<{}> = () => (
  <Switch>
    <Route path={URL_MOVIES} render={Movies} />
    <Route path={URL_CHARACTERS} render={Characters} />
    <Route path={URL_PLANETS} render={Planets} />
    <Route path={URL_STARSHIPS} render={Starships} />
    <Route path={URL_SPECIES} render={Species} />
    <Route path={URL_VEHICLES} />
  </Switch>
);

