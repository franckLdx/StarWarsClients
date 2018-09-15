import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export const makeRenderListComponent = (Component: React.ComponentType<{}>) =>
  (routeProps: RouteComponentProps<any>) => {
    return <Component />;
  }

export const makeRenderPageComponent = (Component: React.ComponentType<{}>) =>
  (params: any) => {
    return <Component />;
  }

