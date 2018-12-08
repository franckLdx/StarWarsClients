import * as React from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RouterRenderer } from "src/model";
import { URL_SPECIES } from '../Router';
import SpeciesList from './List';
import Specie from './specie';

export const router: RouterRenderer = () => {
  return (
    <Switch>
      <Route exact={true} path={URL_SPECIES} component={SpeciesList} />
      <Route exact={true} path={`${URL_SPECIES}/:id`} render={specieRenderer} />
    </Switch>
  )
};

const specieRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Specie id={routeParams.match.params.id} />;
}

export default router;