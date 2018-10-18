import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { URL_MOVIES } from '../routes/Router';
import Item from './Item';
import List from './List';

type RouterRenderer = (props: RouteComponentProps<any>) => React.ReactNode;

const router: RouterRenderer = () => (
  <Switch>
    <Route exact={true} path={URL_MOVIES} component={List} />
    <Route exact={true} path={`${URL_MOVIES}/:id`} render={ItemRenderer} />
  </Switch>
)

export default router;

const ItemRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Item id={routeParams.match.params.id} />;
}