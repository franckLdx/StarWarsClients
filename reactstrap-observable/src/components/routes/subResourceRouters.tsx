import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { mapHashToPageNumber } from './tools';

export type ListRenderProps = (pageNumber: number) => React.ReactNode;

export const makeRendererList = (listRenderProps: ListRenderProps) =>
  (routeProps: RouteComponentProps<any>) => {
    const hash = routeProps.location.hash;
    if (!hash) {
      return <Redirect to={`${routeProps.location.pathname}#page=1`} />
    }
    const pageNumber = mapHashToPageNumber(hash);
    return listRenderProps(pageNumber);
  }

export const makeRendererRecord = (Component: React.ComponentType<{}>) =>
  (params: any) => {
    return <Component />;
  }