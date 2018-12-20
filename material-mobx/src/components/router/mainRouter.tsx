import * as React from 'react';

import { Route, Switch } from 'react-router';

import Characters from '../characters';
import Movies from '../movies';
import Planets from '../planets';
import Species from '../species';
import Starships from '../starships';
import Vehicles from '../vehicles';
import {
  URL_CHARACTERS,
  URL_MOVIES,
  URL_PLANETS,
  URL_SPECIES,
  URL_STARSHIPS,
  URL_VEHICLES
} from './url';

export const MainRouter: React.SFC<{}> = () => (
  <Switch>
    <Route path={URL_MOVIES} render={Movies} />
    <Route path={URL_CHARACTERS} render={Characters} />
    <Route path={URL_PLANETS} render={Planets} />
    <Route path={URL_STARSHIPS} render={Starships} />
    <Route path={URL_SPECIES} render={Species} />
    <Route path={URL_VEHICLES} render={Vehicles} />
  </Switch>
);
