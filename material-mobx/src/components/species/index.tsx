import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import { RouterRenderer } from "src/model";
import { URL_SPECIES } from '../Router';

export const router: RouterRenderer = () => (
  <Switch>
    <Route exact={true} path={URL_SPECIES} />
    <Route exact={true} path={`${URL_SPECIES}/:id`} />
  </Switch>
)

export default router;