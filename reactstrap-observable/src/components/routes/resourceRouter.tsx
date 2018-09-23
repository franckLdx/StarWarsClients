import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Renderer } from './tools';

export interface IRouteDef {
  url: string;
  renderer: Renderer;
}

export const makeResourceRouter = (listDef: IRouteDef, recordef: IRouteDef): Renderer => {
  return () => {
    return (
      <Switch>
        <Route exact={true} path={listDef.url} render={listDef.renderer} />
        <Route exact={true} path={`${recordef.url}/:id`} render={recordef.renderer} />
        <Redirect to={listDef.url} push={true} />
      </Switch>
    );
  }
};