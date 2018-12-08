import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { RouterRenderer } from 'src/model/Route';
import { URL_CHARACTERS } from '../Router';
import Character from './Character';
import CharactersList from './list';

const router: RouterRenderer = () => (
  <Switch>
    <Route exact={true} path={URL_CHARACTERS} component={CharactersList} />
    <Route exact={true} path={`${URL_CHARACTERS}/:id`} render={CharacterRenderer} />
  </Switch>
)

const CharacterRenderer = (routeParams: RouteComponentProps<any>) => {
  return <Character characterId={routeParams.match.params.id} />;
}

export default router;