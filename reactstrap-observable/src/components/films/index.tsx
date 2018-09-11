import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { URL_FILMS, } from '../../app/routes';
import { makeRenderPageComponent } from '../../app/routes/render';
import { FilmList } from './filmList';
import { FilmsRecord } from './filmRecord';

export const FilmsSubRouter: React.StatelessComponent<{}> = () => (
  <Switch>
    <Route exact={true} path={URL_FILMS.list} render={FilmsRender} />
    <Route exact={true} path={URL_FILMS.record} children={FilmsRecord} />
  </Switch>
);

const FilmsRender = makeRenderPageComponent(FilmList);