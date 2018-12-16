import * as React from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RouterRenderer } from "src/model";
import { URL_STARSHIPS } from '../Router';
import starshipsList from './List';
import Starship from './starship';

export const router: RouterRenderer = () => {
  return (
    <Switch>
      <Route exact={true} path={URL_STARSHIPS} component={starshipsList} />
      <Route exact={true} path={`${URL_STARSHIPS}/:id`} render={specieRenderer} />
    </Switch>
  )
};

const specieRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Starship id={routeParams.match.params.id} />;
}

export default router;