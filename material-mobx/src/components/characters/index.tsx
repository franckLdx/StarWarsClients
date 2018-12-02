import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { RouterRenderer } from 'src/model/Route';
import { URL_CHARACTERS } from '../Router';
import Character from './Character';
import List from './List';

const router: RouterRenderer = () => (
  <Switch>
    <Route exact={true} path={URL_CHARACTERS} component={List} />
    <Route exact={true} path={`${URL_CHARACTERS}/:id`} render={ItemRenderer} />
  </Switch>
)

const ItemRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Character characterId={routeParams.match.params.id} />;
}

export default router;