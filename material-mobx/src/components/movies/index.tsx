import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { RouterRenderer } from 'src/model/Route';
import { URL_MOVIES } from '../Router';
import MoviesList from './List';
import Movie from './Movie';

const router: RouterRenderer = () => (
  <Switch>
    <Route exact={true} path={URL_MOVIES} component={MoviesList} />
    <Route exact={true} path={`${URL_MOVIES}/:id`} render={MovieRenderer} />
  </Switch>
)

const MovieRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Movie id={routeParams.match.params.id} />;
}

export default router;