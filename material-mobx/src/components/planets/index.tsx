import * as React from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RouterRenderer } from 'src/model';
import { URL_PLANETS } from '../Router';
import PlanetsList from './list';
import Planet from './planet';

const router: RouterRenderer = () => {
  return (
    <Switch>
      <Route exact={true} path={URL_PLANETS} component={PlanetsList} />
      <Route exact={true} path={`${URL_PLANETS}/:id`} render={planetRenderer} />
    </Switch>
  )
}

const planetRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Planet id={routeParams.match.params.id} />;
}

export default router;