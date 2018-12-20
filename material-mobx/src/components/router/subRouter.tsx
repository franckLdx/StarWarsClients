import * as React from 'react';

import { Route, RouteComponentProps, Switch } from 'react-router';
import { RouterRenderer } from 'src/model';

export type RouterRenderer = (props: RouteComponentProps<any>) => React.ReactNode;

interface ISubRouterProps {
  url: string;
  ListComponent: React.ComponentType<any>;
  RecordComponent: React.ComponentType<{ id: string }>;
}

export function createSubRouter(props: ISubRouterProps): RouterRenderer {
  const renderer = createRenderer(props.RecordComponent);
  return () => (
    <Switch>
      <Route exact={true} path={props.url} component={props.ListComponent} />
      <Route exact={true} path={`${props.url}/:id`} render={renderer} />
    </Switch>
  );
}

function createRenderer(RecordComponent: React.ComponentType<any>) {
  return (routeParams: RouteComponentProps<any>) =>
    <RecordComponent id={routeParams.match.params.id} />;
}