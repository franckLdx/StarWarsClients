import * as React from 'react';

import { Switch } from 'react-router';
import { Route, RouteComponentProps } from 'react-router-dom';
import { RouterRenderer } from 'src/model';
import { URL_VEHICLES } from '../Router';
import VehiclesList from './List';
import Vehicle from './vehicle';

export const router: RouterRenderer = () => {
  return (
    <Switch>
      <Route exact={true} path={URL_VEHICLES} component={VehiclesList} />
      <Route exact={true} path={`${URL_VEHICLES}/:id`} render={vehicleRenderer} />
    </Switch>
  )
};

const vehicleRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Vehicle id={routeParams.match.params.id} />;
}

export default router;