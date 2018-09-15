import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';

export interface ISubRouterPath { url: string, renderer: (routeProps: RouteComponentProps<any>) => React.ReactNode };

export interface ISubRouterProps {
  list: ISubRouterPath,
  record: ISubRouterPath,
}
export const SubRouter: React.StatelessComponent<ISubRouterProps> = ({ list, record }) => (
  <Switch>
    <Route exact={true} path={list.url} render={list.renderer} />
    <Route exact={true} path={record.url} children={record.renderer} />
  </Switch>
);
